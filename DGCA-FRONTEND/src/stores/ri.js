import { defineStore } from 'pinia'
import { request } from '../utils/api'

export const useRIStore = defineStore({
  id: 'ri-store',
  state: () => ({
    rawItems: [],
    rawDetails: []
  }),
  getters: {
    items: (state) => state.rawItems,
    details: (state) => state.rawDetails
  },
  actions: {
    async readItem(search_type, search_data, page_number, total_row_displayed) {
      try {
        const { data } = await request.get(
          `/ri?search_type=${search_type}&search_data=${search_data}&page_number=${page_number}&total_row_displayed=${total_row_displayed}`
        )
        if (data.success) {
          this.rawItems = data.data.rows
          // this.rawDetails = data.data.outlet
          // return this.rawItems
          return data.data.total_pages
        }
      } catch (error) {
        throw new Error(error)
      }
    },
    async readDetail(id_ri) {
      try {
        const { data } = await request.get(`/ri/detail/${id_ri}`)
        console.log(data)
        if (data.success) {
          this.rawDetails = data.data
          // this.rawDetails = data.data.outlet
          return this.rawDetails
        }
      } catch (error) {
        throw new Error(error)
      }
    },
    async addGet() {
      try {
        const { data } = await request.post('ri/create')
        if (data.success) {
          return data.data[0]
        }
      } catch (error) {
        throw new Error(error)
      }
    },
    async saveItem(id_ri, data_utama) {
      try {
        const { data } = await request.post('ri/saveri', { id_ri, data_utama })

        if (data.success) {
          return data.success
        }
      } catch (error) {
        throw new Error(error)
      }
    },
    async removeItem(id_ri) {
      try {
        //console.log(id_ri, old_sign)
        this.rawItems = this.rawItems.filter((item) => item.id_ri !== id_ri)
        const { data } = await request.delete(`/ri/deleteri/${id_ri}`)
        if (data.success) {
          //console.log('removing item', data)
          return data.success
        }
      } catch (error) {
        throw new Error(error)
      }
    }
  }
})
