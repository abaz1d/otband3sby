<script setup>
import moment from 'moment'
import { useRIStore } from '@/stores/ri'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const RI = useRIStore()

const data_utama = ref({
  _1_2: `${moment(Date.now()).format('YYYY-MM-DD HH:mm')}`,
  _3: '', //place
  _4: '', //opr
  _5: '', //state
  _6: '', //aoc
  _7: '', //route_from
  _8: '', //no_flight_from
  _9: '', //route_to
  _10: '', //no_flight_to
  _11: { passenger: false, cargo: false, other: false }, //type of operation
  _12: '', //aircraft model
  _13: '', //reg mark
  _14: '', //serial
  _15: '', //flight crew state of licensed
  _16: { name: '', function: '', signature: '' }, // acknowledgement
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
      _25: { check: false, remark: false }
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
      _15: { check: false, remark: false }
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
      _12: { check: false, remark: false }
    },
    d: {
      _1: { check: false, remark: false },
      _2: { check: false, remark: false },
      _3: { check: false, remark: false }
    },
    e: {
      _1: { check: false, remark: false },
      _2: { check: false, remark: false },
      _3: { check: false, remark: false }
    }
  },
  _19: {
    _1: false,
    _2: false,
    _3: false,
    _4: false,
    _5: false,
    _6: false
  },
  _20_21_22: {
    _1: { item: '', cat: '', remark: '' },
    _2: { item: '', cat: '', remark: '' },
    _3: { item: '', cat: '', remark: '' },
    _4: { item: '', cat: '', remark: '' },
    _5: { item: '', cat: '', remark: '' },
    _6: { item: '', cat: '', remark: '' },
    _7: { item: '', cat: '', remark: '' },
    _8: { item: '', cat: '', remark: '' },
    _9: { item: '', cat: '', remark: '' },
    _10: { item: '', cat: '', remark: '' },
    _11: { item: '', cat: '', remark: '' },
    _12: { item: '', cat: '', remark: '' },
    _13: { item: '', cat: '', remark: '' }
  },
  _23: {
    _1: { name: '', signature: false },
    _2: { name: '', signature: false },
    _3: { name: '', signature: false },
    _4: { name: '', signature: false },
    _5: { name: '', signature: false }
  },
  _24: ''
})

onMounted(async () => {
  try {
    document.title =
      'RAMP INSPECTION CHECKLIST' + ' ' + `${moment(Date.now()).format('DD MMM YYYY HH:SS')}`

    const data = await RI.readDetail(route.params.id)
    data_utama.value = data[0].data_utama

    setTimeout(() => {
      window.print()
      window.onfocus = () => {
        router.back()
      }
    }, 500)
  } catch (error) {
    alert('ERROR PRINT RI' + error)
  }
})
</script>
<template>
  <div class="" :id="route.params.id">
    <div class="page bg-white mx-auto">
      <div class="h-full">
        <div class="border border-black flex">
          <div class="w-2/12 border-b border-black justify-end items-center">
            <img src="@/assets/images/logo512.png" alt="logo" class="mx-auto h-20" />
          </div>
          <div class="w-10/12 border-b border-black text-center align-middle">
            <span class="uppercase text-base font-bold -mb-1"
              >MINISTRY OF TRANSPORTATION DIRECTORATE GENERAL OF CIVIL AVIATION</span
            >
            <p class="text-[10px] mb-1 font-medium">
              Office Complex Soekarno - Hatta International Airport, C3 St., Tangerang, Banten -
              Indonesia
            </p>
            <p class="text-[10px] mb-1 font-medium">
              Telp. (6221) 225 66288, (+6221) 226 08887 Fax: (+6221) 225 66399
            </p>
            <p class="text-[10px] mb-1 font-medium">
              Website: hubud.dephub.go.id; e-mail: daao_dgca@dephub.go.id
            </p>
          </div>
        </div>
        <p class="w-full text-sm font-bold text-center border-b border-x border-black p-1">
          RAMP INSPECTION CHECKLIST
        </p>
        <div class="flex border-x border-black text-xs">
          <div class="w-5/12">
            <div class="flex">
              <div class="w-[55%] border-black border-b border-r p-1">
                1) DATE: {{ moment(data_utama._1_2).format('YYYY-MM-DD') }}
              </div>
              <div class="w-[45%] border-b border-black p-1 uppercase">
                2) TIME: {{ moment(data_utama._1_2).format('HH:mm') }}
              </div>
            </div>
            <div class="w-full border-b border-black p-1 uppercase">
              4) OPERATOR: {{ data_utama._4 }}
            </div>
            <div class="flex">
              <div class="w-[55%] border-black border-b border-r p-1">
                7) ROUTE FROM: {{ data_utama._7 }}
              </div>
              <div class="w-[45%] border-b border-black p-1 uppercase">
                8) FLIGHT NO: {{ data_utama._8 }}
              </div>
            </div>
          </div>
          <div class="w-7/12 border-b border-l border-black">
            <div class="w-full border-b border-black p-1 uppercase">
              3) PLACE: {{ data_utama._3 }}
            </div>
            <div class="flex">
              <div class="w-[55%] border-black border-b border-r p-1">
                5) STATE: {{ data_utama._5 }}
              </div>
              <div class="w-[45%] border-b border-black p-1 uppercase">
                6) AOC NO: {{ data_utama._6 }}
              </div>
            </div>
            <div class="flex">
              <div class="w-[55%] border-r border-black p-1">9) ROUTE TO: {{ data_utama._9 }}</div>
              <div class="w-[45%] uppercase p-1">10) FLIGHT NO: {{ data_utama._10 }}</div>
            </div>
          </div>
        </div>
        <div class="flex border-x border-black text-xs">
          <div class="w-5/12 border-b border-black p-1">
            11) TYPE OF OPERATION (REF.OSPECS):
            <div class="flex">
              <div class="w-4/12 px-1 flex">
                <CheckSquareIcon v-if="data_utama._11.passenger" class="mr-2 h-6 w-6" />
                <SquareIcon v-else class="mr-1 h-6 w-6" />
                <label for="passenger" class="my-[3px]">Passenger</label>
              </div>
              <div class="w-4/12 px-1 flex">
                <CheckSquareIcon v-if="data_utama._11.cargo" class="mr-2 h-6 w-6" />
                <SquareIcon v-else class="mr-1 h-6 w-6" />
                <label for="cargo" class="my-[3px]">Cargo</label>
              </div>
              <div class="w-4/12 px-1 flex">
                <CheckSquareIcon v-if="data_utama._11.other" class="mr-2 h-6 w-6" />
                <SquareIcon v-else class="mr-1 h-6 w-6" />
                <label for="other" class="my-[3px]">Other</label>
              </div>
            </div>
          </div>
          <div class="w-7/12 border-b border-l border-black">
            <div class="w-full border-b border-black p-1 uppercase">
              12) AIRCRAFT MODEL: {{ data_utama._12 }}
            </div>
            <div class="flex">
              <div class="w-[55%] border-black border-r p-1">
                13) RESGISTRATION MARK: {{ data_utama._13 }}
              </div>
              <div class="w-[45%] p-1 uppercase">14) SERIAL NUMBER: {{ data_utama._14 }}</div>
            </div>
          </div>
        </div>
        <div class="flex border-x border-black text-xs">
          <div class="w-5/12 border-b border-black p-1">
            15) FLIGHT CREW STATE OF LICENSING: <br />
            <div class="text-lg text-center mt-1 py-0">{{ data_utama._15 }}</div>
          </div>
          <div class="w-7/12 border-b border-l border-black">
            <div class="w-full border-b border-black px-1 italic text-center font-semibold">
              16) Acknowledgement Of Receipt (*)
            </div>
            <div class="flex">
              <div class="w-5/12 border-black border-r px-1 leading-5">
                a) NAME :
                <span class="underline underline-offset-1 py-0">{{
                  data_utama._16.name == '' ? '_____________________' : data_utama._16.name
                }}</span>
                <br />
                b) FUNCTION :
                <span class="underline underline-offset-1 py-0">{{
                  data_utama._16.function == '' ? '_____________________' : data_utama._16.function
                }}</span>
              </div>
              <div class="w-7/12 px-1 uppercase leading-5">
                c) SIGNATURE: <br />
                <span class="underline underline-offset-1 py-0">{{
                  data_utama._16.signature == ''
                    ? '_________________________________________'
                    : data_utama._16.signature
                }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="flex border-x border-black text-[10px] font-semibold">
          <div class="w-4/12 text-right">17)Check <span class="mr-1"></span> 18)Remark</div>
          <div class="w-4/12 text-right">17)Check <span class="mr-1"></span> 18)Remark</div>
          <div class="w-4/12 text-right">17)Check <span class="mr-1"></span> 18)Remark</div>
        </div>
        <div class="flex space-x-2 px-1 pb-1 border-x border-black text-[10px]">
          <div class="w-4/12">
            <table class="text-sm w-full">
              <tr class="bg-neutral-300">
                <th class="text-center py-0">A.</th>
                <th class="text-start px-2 py-0" colspan="3">FLIGHT DECK</th>
              </tr>
              <tr class="">
                <td class="text-center w-10 py-0">1</td>
                <td class="py-0 px-2 leading-4">General Condition</td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto py-0 h-5 w-5" v-if="data_utama._17_18.a._1.check" />
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto h-5 w-5" v-if="data_utama._17_18.a._1.remark" />
                </td>
              </tr>
              <tr class="">
                <td class="text-center w-10 py-0">2</td>
                <td class="py-0 px-2 leading-4">Emergency exit</td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto py-0 h-5 w-5" v-if="data_utama._17_18.a._2.check" />
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto h-5 w-5" v-if="data_utama._17_18.a._2.remark" />
                </td>
              </tr>
              <tr class="">
                <td class="text-center w-10 py-0">3</td>
                <td class="py-0 px-2 leading-4">Equipment</td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto py-0 h-5 w-5" v-if="data_utama._17_18.a._3.check" />
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto h-5 w-5" v-if="data_utama._17_18.a._3.remark" />
                </td>
              </tr>
              <tr class="">
                <th class="text-center w-10"></th>
                <th class="px-2 bg-neutral-300 text-start" colspan="3">Documentation</th>
              </tr>
              <tr class="">
                <td class="text-center w-10 py-0">4</td>
                <td class="py-0 px-2 leading-4">Manuals</td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto py-0 h-5 w-5" v-if="data_utama._17_18.a._4.check" />
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto h-5 w-5" v-if="data_utama._17_18.a._4.remark" />
                </td>
              </tr>
              <tr class="">
                <td class="text-center w-10 py-0">5</td>
                <td class="py-0 px-2 leading-4">Checklists</td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto py-0 h-5 w-5" v-if="data_utama._17_18.a._5.check" />
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto h-5 w-5" v-if="data_utama._17_18.a._5.remark" />
                </td>
              </tr>
              <tr class="">
                <td class="text-center w-10 py-0">6</td>
                <td class="py-0 px-2 leading-4">Navigation/Instrument charts</td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto py-0 h-5 w-5" v-if="data_utama._17_18.a._6.check" />
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto h-5 w-5" v-if="data_utama._17_18.a._6.remark" />
                </td>
              </tr>
              <tr class="">
                <td class="text-center w-10 py-0">7</td>
                <td class="py-0 px-2 leading-4">Minimum Equipment List</td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto py-0 h-5 w-5" v-if="data_utama._17_18.a._7.check" />
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto h-5 w-5" v-if="data_utama._17_18.a._7.remark" />
                </td>
              </tr>
              <tr class="">
                <td class="text-center w-10 py-0">8</td>
                <td class="py-0 px-2 leading-4">Certificate of Registration</td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto py-0 h-5 w-5" v-if="data_utama._17_18.a._8.check" />
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto h-5 w-5" v-if="data_utama._17_18.a._8.remark" />
                </td>
              </tr>
              <tr class="">
                <td class="text-center w-10 py-0">9</td>
                <td class="py-0 px-2 leading-4">Noise Certificate (where applicable)</td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto py-0 h-5 w-5" v-if="data_utama._17_18.a._9.check" />
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto h-5 w-5" v-if="data_utama._17_18.a._9.remark" />
                </td>
              </tr>
              <tr class="">
                <td class="text-center w-10 py-0">10</td>
                <td class="py-0 px-2 leading-4">AOC or Equivalent</td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto py-0 h-5 w-5" v-if="data_utama._17_18.a._10.check" />
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto h-5 w-5" v-if="data_utama._17_18.a._10.remark" />
                </td>
              </tr>
              <tr class="">
                <td class="text-center w-10 py-0">11</td>
                <td class="py-0 px-2 leading-4">Radio License</td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto py-0 h-5 w-5" v-if="data_utama._17_18.a._11.check" />
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto h-5 w-5" v-if="data_utama._17_18.a._11.remark" />
                </td>
              </tr>
              <tr class="">
                <td class="text-center w-10 py-0">12</td>
                <td class="py-0 px-2 leading-4">Certificate of Airworthiness</td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto py-0 h-5 w-5" v-if="data_utama._17_18.a._12.check" />
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto h-5 w-5" v-if="data_utama._17_18.a._12.remark" />
                </td>
              </tr>
              <tr class="">
                <th class="text-center w-10"></th>
                <th class="px-2 bg-neutral-300 text-start" colspan="3">Flight Data</th>
              </tr>
              <tr class="">
                <td class="text-center w-10 py-0">13</td>
                <td class="py-0 px-2 leading-4">Flight preparation</td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto py-0 h-5 w-5" v-if="data_utama._17_18.a._13.check" />
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto h-5 w-5" v-if="data_utama._17_18.a._13.remark" />
                </td>
              </tr>
              <tr class="">
                <td class="text-center w-10 py-0">14</td>
                <td class="py-0 px-2 leading-4">Weight and Balance sheet</td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto py-0 h-5 w-5" v-if="data_utama._17_18.a._14.check" />
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto h-5 w-5" v-if="data_utama._17_18.a._14.remark" />
                </td>
              </tr>
              <tr class="">
                <th class="text-center w-10"></th>
                <th class="px-2 bg-neutral-300 text-start" colspan="3">Safety Equipment</th>
              </tr>
              <tr class="">
                <td class="text-center w-10 py-0">15</td>
                <td class="py-0 px-2 leading-4">Hand fire extinguishers</td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto py-0 h-5 w-5" v-if="data_utama._17_18.a._15.check" />
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto h-5 w-5" v-if="data_utama._17_18.a._15.remark" />
                </td>
              </tr>
              <tr class="">
                <td class="text-center w-10 py-0">16</td>
                <td class="py-0 px-2 leading-4">Life jackets/flotation devices</td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto py-0 h-5 w-5" v-if="data_utama._17_18.a._16.check" />
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto h-5 w-5" v-if="data_utama._17_18.a._16.remark" />
                </td>
              </tr>
              <tr class="">
                <td class="text-center w-10 py-0">17</td>
                <td class="py-0 px-2 leading-4">Safety Harness</td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto py-0 h-5 w-5" v-if="data_utama._17_18.a._17.check" />
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto h-5 w-5" v-if="data_utama._17_18.a._17.remark" />
                </td>
              </tr>
              <tr class="">
                <td class="text-center w-10 py-0">18</td>
                <td class="py-0 px-2 leading-4">Oxygen Equipment</td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto py-0 h-5 w-5" v-if="data_utama._17_18.a._18.check" />
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto h-5 w-5" v-if="data_utama._17_18.a._18.remark" />
                </td>
              </tr>
              <tr class="">
                <td class="text-center w-10 py-0">19</td>
                <td class="py-0 px-2 leading-4">Flash light and crash axe</td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto py-0 h-5 w-5" v-if="data_utama._17_18.a._19.check" />
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto h-5 w-5" v-if="data_utama._17_18.a._19.remark" />
                </td>
              </tr>
              <tr class="">
                <th class="text-center w-10"></th>
                <th class="px-2 bg-neutral-300 text-start" colspan="3">Flight crew</th>
              </tr>
              <tr class="">
                <td class="text-center w-10 py-0">20</td>
                <td class="py-0 px-2 leading-4">Flight crew license and required equipment</td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto py-0 h-5 w-5" v-if="data_utama._17_18.a._20.check" />
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto h-5 w-5" v-if="data_utama._17_18.a._20.remark" />
                </td>
              </tr>
            </table>
          </div>
          <div class="w-4/12">
            <table class="text-sm w-full mb-2">
              <tr class="bg-neutral-300">
                <th class="text-center"></th>
                <th class="text-start px-2" colspan="3">
                  Journey log book/Technical log or equivalent
                </th>
              </tr>
              <tr class="">
                <td class="text-center w-10 py-0">21</td>
                <td class="py-0 px-2 leading-4">Journey log book or equivalent</td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto py-0 h-5 w-5" v-if="data_utama._17_18.a._21.check" />
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto h-5 w-5" v-if="data_utama._17_18.a._21.remark" />
                </td>
              </tr>
              <tr class="">
                <td class="text-center w-10 py-0">22</td>
                <td class="py-0 px-2 leading-4">Maintenance release</td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto py-0 h-5 w-5" v-if="data_utama._17_18.a._22.check" />
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto h-5 w-5" v-if="data_utama._17_18.a._22.remark" />
                </td>
              </tr>
              <tr class="">
                <td class="text-center w-10 py-0">23</td>
                <td class="py-0 px-2 leading-4">
                  Defect notification and rectification (incl. Tech Log)
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto py-0 h-5 w-5" v-if="data_utama._17_18.a._23.check" />
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto h-5 w-5" v-if="data_utama._17_18.a._23.remark" />
                </td>
              </tr>
              <tr class="">
                <td class="text-center w-10 py-0">24</td>
                <td class="py-0 px-2 leading-4">Pre-flight inspection</td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto py-0 h-5 w-5" v-if="data_utama._17_18.a._24.check" />
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto h-5 w-5" v-if="data_utama._17_18.a._24.remark" />
                </td>
              </tr>
              <tr class="">
                <td class="text-center w-10 py-0">25</td>
                <td class="py-0 px-2 leading-4">ETOPS/EDTO Requirements (if applicable)</td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto py-0 h-5 w-5" v-if="data_utama._17_18.a._25.check" />
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto h-5 w-5" v-if="data_utama._17_18.a._25.remark" />
                </td>
              </tr>
            </table>
            <table class="text-sm w-full">
              <tr class="bg-neutral-300">
                <th class="text-center">B</th>
                <th class="text-start px-2" colspan="3">SAFETY/ CABIN</th>
              </tr>
              <tr class="">
                <td class="text-center w-10 py-0">1</td>
                <td class="py-0 px-2 leading-4">General internal Condition and placard</td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto py-0 h-5 w-5" v-if="data_utama._17_18.b._1.check" />
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto h-5 w-5" v-if="data_utama._17_18.b._1.remark" />
                </td>
              </tr>
              <tr class="">
                <td class="text-center w-10 py-0">2</td>
                <td class="py-0 px-2 leading-4">Cabin attendants station and crew rest area</td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto py-0 h-5 w-5" v-if="data_utama._17_18.b._2.check" />
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto h-5 w-5" v-if="data_utama._17_18.b._2.remark" />
                </td>
              </tr>
              <tr class="">
                <td class="text-center w-10 py-0">3</td>
                <td class="py-0 px-2 leading-4">First aid kit, emergency medical kit</td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto py-0 h-5 w-5" v-if="data_utama._17_18.b._3.check" />
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto h-5 w-5" v-if="data_utama._17_18.b._3.remark" />
                </td>
              </tr>
              <tr class="">
                <td class="text-center w-10 py-0">4</td>
                <td class="py-0 px-2 leading-4">Fire extinguisher and PBE</td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto py-0 h-5 w-5" v-if="data_utama._17_18.b._4.check" />
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto h-5 w-5" v-if="data_utama._17_18.b._4.remark" />
                </td>
              </tr>
              <tr class="">
                <td class="text-center w-10 py-0">5</td>
                <td class="py-0 px-2 leading-4">Life jackets/ flotation devices</td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto py-0 h-5 w-5" v-if="data_utama._17_18.b._5.check" />
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto h-5 w-5" v-if="data_utama._17_18.b._5.remark" />
                </td>
              </tr>
              <tr class="">
                <td class="text-center w-10 py-0">6</td>
                <td class="py-0 px-2 leading-4">Seat belt and seat condition</td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto py-0 h-5 w-5" v-if="data_utama._17_18.b._6.check" />
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto h-5 w-5" v-if="data_utama._17_18.b._6.remark" />
                </td>
              </tr>
              <tr class="">
                <td class="text-center w-10 py-0">7</td>
                <td class="py-0 px-2 leading-4">
                  Emergency exit, lighting, marking, flash light, and megaphone
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto py-0 h-5 w-5" v-if="data_utama._17_18.b._7.check" />
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto h-5 w-5" v-if="data_utama._17_18.b._7.remark" />
                </td>
              </tr>
              <tr class="">
                <td class="text-center w-10 py-0">8</td>
                <td class="py-0 px-2 leading-4">Slides, Life-Rafts (as required) and ELT</td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto py-0 h-5 w-5" v-if="data_utama._17_18.b._8.check" />
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto h-5 w-5" v-if="data_utama._17_18.b._8.remark" />
                </td>
              </tr>
              <tr class="">
                <td class="text-center w-10 py-0">9</td>
                <td class="py-0 px-2 leading-4">Oxygen supply (cabin crew and passengers)</td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto py-0 h-5 w-5" v-if="data_utama._17_18.b._9.check" />
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto h-5 w-5" v-if="data_utama._17_18.b._9.remark" />
                </td>
              </tr>
              <tr class="">
                <td class="text-center w-10 py-0">10</td>
                <td class="py-0 px-2 leading-4">Safety instruction</td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto py-0 h-5 w-5" v-if="data_utama._17_18.b._10.check" />
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto h-5 w-5" v-if="data_utama._17_18.b._10.remark" />
                </td>
              </tr>
              <tr class="">
                <td class="text-center w-10 py-0">11</td>
                <td class="py-0 px-2 leading-4">Cabin crew members</td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto py-0 h-5 w-5" v-if="data_utama._17_18.b._1.check" />
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto h-5 w-5" v-if="data_utama._17_18.b._1.remark" />
                </td>
              </tr>
              <tr class="">
                <td class="text-center w-10 py-0">12</td>
                <td class="py-0 px-2 leading-4">Access to emergency exits</td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto py-0 h-5 w-5" v-if="data_utama._17_18.b._12.check" />
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto h-5 w-5" v-if="data_utama._17_18.b._12.remark" />
                </td>
              </tr>
              <tr class="">
                <td class="text-center w-10 py-0">13</td>
                <td class="py-0 px-2 leading-4">Stowage of passenger baggage</td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto py-0 h-5 w-5" v-if="data_utama._17_18.b._13.check" />
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto h-5 w-5" v-if="data_utama._17_18.b._13.remark" />
                </td>
              </tr>
              <tr class="">
                <td class="text-center w-10 py-0">14</td>
                <td class="py-0 px-2 leading-4">Seat capacity</td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto py-0 h-5 w-5" v-if="data_utama._17_18.b._14.check" />
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto h-5 w-5" v-if="data_utama._17_18.b._14.remark" />
                </td>
              </tr>
              <tr class="">
                <td class="text-center w-10 py-0">15</td>
                <td class="py-0 px-2 leading-4">
                  Security of the flight crew compartment door (if applicable)
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto py-0 h-5 w-5" v-if="data_utama._17_18.b._15.check" />
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto h-5 w-5" v-if="data_utama._17_18.b._15.remark" />
                </td>
              </tr>
            </table>
          </div>
          <div class="w-4/12">
            <table class="text-sm w-full mb-2">
              <tr class="bg-neutral-300">
                <th class="text-center">C.</th>
                <th class="text-start px-2" colspan="3">AIRCRAFT CONDITION</th>
              </tr>
              <tr class="">
                <td class="text-center w-10 py-0">1</td>
                <td class="py-0 px-2 leading-4">General external Condition</td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto py-0 h-5 w-5" v-if="data_utama._17_18.c._1.check" />
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto h-5 w-5" v-if="data_utama._17_18.c._1.remark" />
                </td>
              </tr>
              <tr class="">
                <td class="text-center w-10 py-0">2</td>
                <td class="py-0 px-2 leading-4">Doors and hatches</td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto py-0 h-5 w-5" v-if="data_utama._17_18.c._2.check" />
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto h-5 w-5" v-if="data_utama._17_18.c._2.remark" />
                </td>
              </tr>
              <tr class="">
                <td class="text-center w-10 py-0">3</td>
                <td class="py-0 px-2 leading-4">Wings, Flight controls, and Tail</td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto py-0 h-5 w-5" v-if="data_utama._17_18.c._3.check" />
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto h-5 w-5" v-if="data_utama._17_18.c._3.remark" />
                </td>
              </tr>
              <tr class="">
                <td class="text-center w-10 py-0">4</td>
                <td class="py-0 px-2 leading-4">Wheels, brakes and tires</td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto py-0 h-5 w-5" v-if="data_utama._17_18.c._4.check" />
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto h-5 w-5" v-if="data_utama._17_18.c._4.remark" />
                </td>
              </tr>
              <tr class="">
                <td class="text-center w-10 py-0">5</td>
                <td class="py-0 px-2 leading-4">Undercarriage, skids/floats</td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto py-0 h-5 w-5" v-if="data_utama._17_18.c._5.check" />
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto h-5 w-5" v-if="data_utama._17_18.c._5.remark" />
                </td>
              </tr>
              <tr class="">
                <td class="text-center w-10 py-0">6</td>
                <td class="py-0 px-2 leading-4">Wheel well</td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto py-0 h-5 w-5" v-if="data_utama._17_18.c._6.check" />
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto h-5 w-5" v-if="data_utama._17_18.c._6.remark" />
                </td>
              </tr>
              <tr class="">
                <td class="text-center w-10 py-0">7</td>
                <td class="py-0 px-2 leading-4">
                  Intake and exhaust nozzle (powerplant and pylon)
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto py-0 h-5 w-5" v-if="data_utama._17_18.c._7.check" />
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto h-5 w-5" v-if="data_utama._17_18.c._7.remark" />
                </td>
              </tr>
              <tr class="">
                <td class="text-center w-10 py-0">8</td>
                <td class="py-0 px-2 leading-4">Fan blades (if applicable)</td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto py-0 h-5 w-5" v-if="data_utama._17_18.c._8.check" />
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto h-5 w-5" v-if="data_utama._17_18.c._8.remark" />
                </td>
              </tr>
              <tr class="">
                <td class="text-center w-10 py-0">9</td>
                <td class="py-0 px-2 leading-4">Propellers or rotors (if applicable)</td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto py-0 h-5 w-5" v-if="data_utama._17_18.c._9.check" />
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto h-5 w-5" v-if="data_utama._17_18.c._9.remark" />
                </td>
              </tr>
              <tr class="">
                <td class="text-center w-10 py-0">10</td>
                <td class="py-0 px-2 leading-4">Obvious repairs</td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto py-0 h-5 w-5" v-if="data_utama._17_18.c._10.check" />
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto h-5 w-5" v-if="data_utama._17_18.c._10.remark" />
                </td>
              </tr>
              <tr class="">
                <td class="text-center w-10 py-0">11</td>
                <td class="py-0 px-2 leading-4">Obvious unrepaired damage</td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto py-0 h-5 w-5" v-if="data_utama._17_18.c._11.check" />
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto h-5 w-5" v-if="data_utama._17_18.c._11.remark" />
                </td>
              </tr>
              <tr class="">
                <td class="text-center w-10 py-0">12</td>
                <td class="py-0 px-2 leading-4">Leakage</td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto py-0 h-5 w-5" v-if="data_utama._17_18.c._12.check" />
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto h-5 w-5" v-if="data_utama._17_18.c._12.remark" />
                </td>
              </tr>
            </table>
            <table class="text-sm w-full mb-2">
              <tr class="bg-neutral-300">
                <th class="text-center">D</th>
                <th class="text-start px-2" colspan="3">CARGO</th>
              </tr>
              <tr class="">
                <td class="text-center w-10 py-0">1</td>
                <td class="py-0 px-2 leading-4">
                  General condition of cargo compartment and containers
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto py-0 h-5 w-5" v-if="data_utama._17_18.d._1.check" />
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto h-5 w-5" v-if="data_utama._17_18.d._1.remark" />
                </td>
              </tr>
              <tr class="">
                <td class="text-center w-10 py-0">2</td>
                <td class="py-0 px-2 leading-4">Dangerous Goods</td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto py-0 h-5 w-5" v-if="data_utama._17_18.d._2.check" />
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto h-5 w-5" v-if="data_utama._17_18.d._2.remark" />
                </td>
              </tr>
              <tr class="">
                <td class="text-center w-10 py-0">3</td>
                <td class="py-0 px-2 leading-4">Safety of cargo on board</td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto py-0 h-5 w-5" v-if="data_utama._17_18.d._3.check" />
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto h-5 w-5" v-if="data_utama._17_18.d._3.remark" />
                </td>
              </tr>
            </table>
            <table class="text-sm w-full mb-2">
              <tr class="bg-neutral-300">
                <th class="text-center">E</th>
                <th class="text-start px-2" colspan="3">GENERAL</th>
              </tr>
              <tr class="">
                <td class="text-center w-10 py-0">1</td>
                <td class="py-0 px-2 leading-4">Additional Remark</td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto py-0 h-5 w-5" v-if="data_utama._17_18.e._1.check" />
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto h-5 w-5" v-if="data_utama._17_18.e._1.remark" />
                </td>
              </tr>
              <tr class="">
                <td class="text-center w-10 py-0">2</td>
                <td class="py-0 px-2 leading-4">Refueling</td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto py-0 h-5 w-5" v-if="data_utama._17_18.e._2.check" />
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto h-5 w-5" v-if="data_utama._17_18.e._2.remark" />
                </td>
              </tr>
              <tr class="">
                <td class="text-center w-10 py-0">3</td>
                <td class="py-0 px-2 leading-4">Language for Communication</td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto py-0 h-5 w-5" v-if="data_utama._17_18.e._3.check" />
                </td>
                <td class="py-0 text-center w-6">
                  <CheckIcon class="mx-auto h-5 w-5" v-if="data_utama._17_18.e._3.remark" />
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div class="flex border-x border-t border-black px-1 pb-1 text-xs space-x-2">
          <div class="w-5/12 text-start">
            19) Action Taken
            <table class="w-full mb-[5px]">
              <tr class="">
                <td class="text-center w-[115px]">
                  <CheckIcon class="mx-auto py-0 h-4 w-4" v-if="data_utama._19._1" />
                </td>
                <td class="py-0 px-2 text-start" colspan="3">
                  (3c) Aircraft grounded by DGCA inspector
                </td>
              </tr>
              <tr class="">
                <td class="text-center w-[115px]">
                  <CheckIcon class="mx-auto py-0 h-4 w-4" v-if="data_utama._19._2" />
                </td>
                <td class="py-0 px-2 text-start" colspan="3">
                  (3b) Corrective actions before flight
                </td>
              </tr>
              <tr class="">
                <td class="text-center w-[115px]">
                  <CheckIcon class="mx-auto py-0 h-4 w-4" v-if="data_utama._19._3" />
                </td>
                <td class="py-0 px-2 text-start" colspan="3">(3a) Restrictions on the aircraft</td>
              </tr>
              <tr class="">
                <td class="text-center w-[115px]">
                  <CheckIcon class="mx-auto py-0 h-4 w-4" v-if="data_utama._19._4" />
                </td>
                <td class="py-0 px-2 text-start" colspan="3">
                  (2) Information to the operator and authority
                </td>
              </tr>
              <tr class="">
                <td class="text-center w-[115px]">
                  <CheckIcon class="mx-auto py-0 h-4 w-4" v-if="data_utama._19._5" />
                </td>
                <td class="py-0 px-2 text-start" colspan="3">(1) Information to the PIC</td>
              </tr>
              <tr class="">
                <td class="text-center w-[115px]">
                  <CheckIcon class="mx-auto py-0 h-4 w-4" v-if="data_utama._19._6" />
                </td>
                <td class="py-0 px-2 text-start" colspan="3">(0) No remarks</td>
              </tr>
            </table>
            23) Inspector(s) name and signature
            <table class="w-full">
              <tr class="h-[15px]">
                <td class="py-0 px-2 text-start" colspan="3">{{ data_utama._23._1.name }}</td>
                <td class="py-0 text-center w-[115px]"></td>
              </tr>
              <tr class="h-[15px]">
                <td class="py-0 px-2 text-start" colspan="3">{{ data_utama._23._2.name }}</td>
                <td class="py-0 text-center w-[115px]"></td>
              </tr>
              <tr class="h-[15px]">
                <td class="py-0 px-2 text-start" colspan="3">{{ data_utama._23._3.name }}</td>
                <td class="py-0 text-center w-[115px]"></td>
              </tr>
              <tr class="h-[15px]">
                <td class="py-0 px-2 text-start" colspan="3">{{ data_utama._23._4.name }}</td>
                <td class="py-0 text-center w-[115px]"></td>
              </tr>
              <tr class="h-[15px]">
                <td class="py-0 px-2 text-start" colspan="3">{{ data_utama._23._5.name }}</td>
                <td class="py-0 text-center w-[115px]"></td>
              </tr>
            </table>
          </div>
          <div class="w-7/12">
            20) Item <span class="mr-[50px]"></span> 21) Cat <span class="mr-[50px]"></span> 22)
            Remark(s)
            <table class="w-full">
              <tr class="h-[17px]">
                <td class="py-0 text-center w-24">{{ data_utama._20_21_22._1.item }}</td>
                <td class="py-0 text-center w-24">{{ data_utama._20_21_22._1.cat }}</td>
                <td class="py-0 px-2 text-start" colspan="3">
                  {{ data_utama._20_21_22._1.remark }}
                </td>
              </tr>
              <tr class="h-[17px]">
                <td class="py-0 text-center w-24">{{ data_utama._20_21_22._2.item }}</td>
                <td class="py-0 text-center w-24">{{ data_utama._20_21_22._2.cat }}</td>
                <td class="py-0 px-2 text-start" colspan="3">
                  {{ data_utama._20_21_22._2.remark }}
                </td>
              </tr>
              <tr class="h-[17px]">
                <td class="py-0 text-center w-24">{{ data_utama._20_21_22._3.item }}</td>
                <td class="py-0 text-center w-24">{{ data_utama._20_21_22._3.cat }}</td>
                <td class="py-0 px-2 text-start" colspan="3">
                  {{ data_utama._20_21_22._3.remark }}
                </td>
              </tr>
              <tr class="h-[17px]">
                <td class="py-0 text-center w-24">{{ data_utama._20_21_22._4.item }}</td>
                <td class="py-0 text-center w-24">{{ data_utama._20_21_22._4.cat }}</td>
                <td class="py-0 px-2 text-start" colspan="3">
                  {{ data_utama._20_21_22._4.remark }}
                </td>
              </tr>
              <tr class="h-[17px]">
                <td class="py-0 text-center w-24">{{ data_utama._20_21_22._5.item }}</td>
                <td class="py-0 text-center w-24">{{ data_utama._20_21_22._5.cat }}</td>
                <td class="py-0 px-2 text-start" colspan="3">
                  {{ data_utama._20_21_22._5.remark }}
                </td>
              </tr>
              <tr class="h-[17px]">
                <td class="py-0 text-center w-24">{{ data_utama._20_21_22._6.item }}</td>
                <td class="py-0 text-center w-24">{{ data_utama._20_21_22._6.cat }}</td>
                <td class="py-0 px-2 text-start" colspan="3">
                  {{ data_utama._20_21_22._6.remark }}
                </td>
              </tr>
              <tr class="h-[17px]">
                <td class="py-0 text-center w-24">{{ data_utama._20_21_22._7.item }}</td>
                <td class="py-0 text-center w-24">{{ data_utama._20_21_22._7.cat }}</td>
                <td class="py-0 px-2 text-start" colspan="3">
                  {{ data_utama._20_21_22._7.remark }}
                </td>
              </tr>
              <tr class="h-[17px]">
                <td class="py-0 text-center w-24">{{ data_utama._20_21_22._8.item }}</td>
                <td class="py-0 text-center w-24">{{ data_utama._20_21_22._8.cat }}</td>
                <td class="py-0 px-2 text-start" colspan="3">
                  {{ data_utama._20_21_22._8.remark }}
                </td>
              </tr>
              <tr class="h-[17px]">
                <td class="py-0 text-center w-24">{{ data_utama._20_21_22._9.item }}</td>
                <td class="py-0 text-center w-24">{{ data_utama._20_21_22._9.cat }}</td>
                <td class="py-0 px-2 text-start" colspan="3">
                  {{ data_utama._20_21_22._9.remark }}
                </td>
              </tr>
              <tr class="h-[17px]">
                <td class="py-0 text-center w-24">{{ data_utama._20_21_22._10.item }}</td>
                <td class="py-0 text-center w-24">{{ data_utama._20_21_22._10.cat }}</td>
                <td class="py-0 px-2 text-start" colspan="3">
                  {{ data_utama._20_21_22._10.remark }}
                </td>
              </tr>
              <tr class="h-[17px]">
                <td class="py-0 text-center w-24">{{ data_utama._20_21_22._11.item }}</td>
                <td class="py-0 text-center w-24">{{ data_utama._20_21_22._11.cat }}</td>
                <td class="py-0 px-2 text-start" colspan="3">
                  {{ data_utama._20_21_22._11.remark }}
                </td>
              </tr>
              <tr class="h-[17px]">
                <td class="py-0 text-center w-24">{{ data_utama._20_21_22._12.item }}</td>
                <td class="py-0 text-center w-24">{{ data_utama._20_21_22._12.cat }}</td>
                <td class="py-0 px-2 text-start" colspan="3">
                  {{ data_utama._20_21_22._12.remark }}
                </td>
              </tr>
              <tr class="h-[17px]">
                <td class="py-0 text-center w-24">{{ data_utama._20_21_22._13.item }}</td>
                <td class="py-0 text-center w-24">{{ data_utama._20_21_22._13.cat }}</td>
                <td class="py-0 px-2 text-start" colspan="3">
                  {{ data_utama._20_21_22._13.remark }}
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div class="border border-black px-1 pb-1 text-xs space-x-2">
          24) Crew comments (if any):
          <table class="w-full">
            <tr class="">
              <td class="px- 1 text-start leading-4">
                (*) Signature by any member of the crew or other representative of the inspected
                operator does in no way imply acceptance of the listed findings but simply a
                confirmation that the aircraft has been inspected on the date and at the place
                indicated on this document. <br />
                <p class="mt-0.5">
                  This report represents an indication of what was found on this occasion and must
                  not be construed as a determination that the aircraft is fit for the intended
                  flight.
                </p>
              </td>
            </tr>
            <tr class="h-12">
              <td class="text-center w-[115px]">{{ data_utama._24 }}</td>
            </tr>
          </table>
        </div>
        <div class="mt-1 text-slate-400 text-sm float-left">DGCA Form No. 120-13 (Jun 2017)</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.page {
  width: 10.5in;
  height: 20.9in;
  /* width: 215mm;
  height: 330mm; */
}
td,
th {
  border: 1px solid #000;
  /* text-align: left; */
  /* padding: 1px; */
}
@media print {
  .pagebreak {
    clear: both;
    page-break-after: always;
  }
}
</style>
