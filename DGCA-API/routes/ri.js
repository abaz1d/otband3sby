var express = require("express");
var router = express.Router();
const fs = require("fs");
var path = require("path");
const { Response } = require("../helpers/util");

/* GET home page. */
module.exports = function (db) {
  router.get("/", async function (req, res, next) {
    const { search_type, search_data, page_number, total_row_displayed } =
      req.query;
    let row_number;
    if (page_number < 2) {
      row_number = 0;
    } else {
      row_number = (page_number - 1) * total_row_displayed;
    }

    try {
      let query = `SELECT COUNT(*) AS total FROM ri`;
      if (search_data !== "") {
        query += ` WHERE ${search_type}${
          search_type === "date" ? "::DATE" : ""
        } ILIKE '%${search_data}%'`;
      }
      const totalPage = await db.query(query);
      let data = totalPage.rows;
      let total_pages;
      if (data[0].total % total_row_displayed == 0) {
        total_pages = parseInt(data[0].total / total_row_displayed);
      } else {
        total_pages = parseInt(data[0].total / total_row_displayed) + 1;
      }
      query = `SELECT * FROM ri`;
      if (search_data !== "") {
        query += ` WHERE ${search_type}${
          search_type === "date" ? "::DATE" : ""
        } ILIKE '%${search_data}%'`;
      }
      query += ` ORDER BY id_ri ASC LIMIT ${total_row_displayed} OFFSET ${row_number};`;
      const { rows } = await db.query(query);
      res.json(new Response({ rows, total_pages }));
    } catch (e) {
      console.error(e);
      res.status(500).json(new Response(e, false));
    }
  });

  router.post("/create", async function (req, res, next) {
    try {
      const data_utama = {
        _1_2: "",
        _3: "", //place
        _4: "", //opr
        _5: "", //state
        _6: "", //aoc
        _7: "", //route_from
        _8: "", //no_flight_from
        _9: "", //route_to
        _10: "", //no_flight_to
        _11: { passenger: false, cargo: false, other: false }, //type of operation
        _12: "", //aircraft model
        _13: "", //reg mark
        _14: "", //serial
        _15: "", //flight crew state of licensed
        _16: { name: "", function: "", signature: "" }, // acknowledgement
        _17_18: {
          a: {
            _1: { check: false, remark: false },
            _2: { check: false, remark: false },
            _3: { check: false, remark: false },
            _4: { check: false, remark: false },
            _5: { check: false, remark: false },
            _6: { check: false, remark: false },
            _7: { check: false, remark: false },
            _8: { check: false, remark: false },
            _9: { check: false, remark: false },
            _10: { check: false, remark: false },
            _11: { check: false, remark: false },
            _12: { check: false, remark: false },
            _13: { check: false, remark: false },
            _14: { check: false, remark: false },
            _15: { check: false, remark: false },
            _16: { check: false, remark: false },
            _17: { check: false, remark: false },
            _18: { check: false, remark: false },
            _19: { check: false, remark: false },
            _20: { check: false, remark: false },
            _21: { check: false, remark: false },
            _22: { check: false, remark: false },
            _23: { check: false, remark: false },
            _24: { check: false, remark: false },
            _25: { check: false, remark: false },
          },
          b: {
            _1: { check: false, remark: false },
            _2: { check: false, remark: false },
            _3: { check: false, remark: false },
            _4: { check: false, remark: false },
            _5: { check: false, remark: false },
            _6: { check: false, remark: false },
            _7: { check: false, remark: false },
            _8: { check: false, remark: false },
            _9: { check: false, remark: false },
            _10: { check: false, remark: false },
            _11: { check: false, remark: false },
            _12: { check: false, remark: false },
            _13: { check: false, remark: false },
            _14: { check: false, remark: false },
            _15: { check: false, remark: false },
          },
          c: {
            _1: { check: false, remark: false },
            _2: { check: false, remark: false },
            _3: { check: false, remark: false },
            _4: { check: false, remark: false },
            _5: { check: false, remark: false },
            _6: { check: false, remark: false },
            _7: { check: false, remark: false },
            _8: { check: false, remark: false },
            _9: { check: false, remark: false },
            _10: { check: false, remark: false },
            _11: { check: false, remark: false },
            _12: { check: false, remark: false },
          },
          d: {
            _1: { check: false, remark: false },
            _2: { check: false, remark: false },
            _3: { check: false, remark: false },
          },
          e: {
            _1: { check: false, remark: false },
            _2: { check: false, remark: false },
            _3: { check: false, remark: false },
          },
        },
        _19: {
          _1: false,
          _2: false,
          _3: false,
          _4: false,
          _5: false,
          _6: false,
        },
        _20_21_22: {
          _1: { item: "", cat: "", remark: "" },
          _2: { item: "", cat: "", remark: "" },
          _3: { item: "", cat: "", remark: "" },
          _4: { item: "", cat: "", remark: "" },
          _5: { item: "", cat: "", remark: "" },
          _6: { item: "", cat: "", remark: "" },
          _7: { item: "", cat: "", remark: "" },
          _8: { item: "", cat: "", remark: "" },
          _9: { item: "", cat: "", remark: "" },
          _10: { item: "", cat: "", remark: "" },
          _11: { item: "", cat: "", remark: "" },
          _12: { item: "", cat: "", remark: "" },
          _13: { item: "", cat: "", remark: "" },
        },
        _23: {
          _1: { name: "", signature: false },
          _2: { name: "", signature: false },
          _3: { name: "", signature: false },
          _4: { name: "", signature: false },
          _5: { name: "", signature: false },
        },
        _24: "",
      };
      const { rows } = await db.query(
        "INSERT INTO public.ri(data_utama) VALUES($1) RETURNING *",
        [data_utama]
      );
      res.json(new Response(rows));
    } catch (e) {
      console.error(e);
      res.status(500).json(new Response(e, false));
    }
  });

  router.post("/saveri", async function (req, res, next) {
    try {
      const { id_ri, data_utama } = req.body;
      const { rows } = await db.query(
        "UPDATE public.ri SET data_utama = $1 WHERE id_ri = $2 RETURNING *;",
        [data_utama, id_ri]
      );
      res.json(new Response(rows));
    } catch (e) {
      console.log(e);
      res.status(500).json(new Response(e, false));
    }
  });

  router.get("/detail/:id", async function (req, res, next) {
    try {
      let reqSQL;

      reqSQL = "SELECT * FROM public.ri WHERE id_ri = $1 ORDER BY id_ri ASC";
      const { rows } = await db.query(reqSQL, [req.params.id]);
      res.json(new Response(rows));
    } catch (e) {
      console.error(e);
      res.status(500).json(new Response(e, false));
    }
  });

  router.delete("/deleteri/:id", async function (req, res, next) {
    try {
      const { rows } = await db.query(
        "DELETE FROM public.ri WHERE id_ri = $1",
        [req.params.id]
      );

      res.json(new Response({ message: "delete RI success" }, true));
    } catch (e) {
      console.error(e);
      res.status(500).json(new Response(e, false));
    }
  });

  return router;
};
