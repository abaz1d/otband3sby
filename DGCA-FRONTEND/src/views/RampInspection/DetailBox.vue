<script setup>
import { onMounted, ref } from 'vue'
import { useRIStore } from '@/stores/ri'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const route = useRoute()
const router = useRouter()
const RI = useRIStore()
const Auth = useAuthStore()
const user = ref('')
const isLoading = ref(true)
const signConfirmationModal = ref(false)
const idSign = ref()

const data_utama = ref({
  _1_2: '',
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

const saveData = () => {
  try {
    if (user.value.role == 'admin') {
      const id_ri = route.params.id
      if (data_utama.value._5 != '' && data_utama.value._4 != '') {
        isLoading.value = true
        RI.saveItem(id_ri, data_utama.value).then(() => {
          resetForm()
          router.push('/ramp-inspection')
          isLoading.value = false
        })
      }
    } else {
      alert('Please at least fill in the form company name, certificate number, and inspector name')
    }
  } catch (error) {
    isLoading.value = false
    alert('ERROR SAVE DATA' + error)
  }
}
const signOn = (e) => {
  signConfirmationModal.value = true
  idSign.value = e
}
const resetForm = () => {
  data_utama.value = {
    _1_2: '',
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
  }
}

onMounted(async () => {
  try {
    user.value = Auth.items
    if (!route.query.isAdd) {
      const data = await RI.readDetail(route.params.id)
      data_utama.value = data[0].data_utama
    }
    isLoading.value = false
  } catch (error) {
    isLoading.value = false
    alert('ERROR MOUNTED DETAILBOX' + error)
  }
})
</script>
<template>
  <div class="flex mb-10 p-5 lg:px-48 bg-white">
    <RouterLink to="/ramp-inspection" class="flex items-center cursor-pointer group float-left">
      <ArrowLeftIcon
        class="transition duration-500 ease-in-out group-hover:scale-150 float-left hover:text-primary"
      />
    </RouterLink>
    <div class="w-full flex items-center justify-center text-center mx-4">
      <a href="" aria-describedby="refresh" class="text-base lg:text-xl font-black">
        {{ $route.params.id }}
      </a>
    </div>
    <RouterLink
      :to="`/print-ramp-inspection/${$route.params.id}`"
      v-if="Object.getOwnPropertyNames(route.query).length == 0"
      class="flex items-center cursor-pointer group float-right uppercase min-w-max rounded-lg bg-red-500 -my-2 p-1 px-2 hover:scale-125 transition duration-500 ease-in-out text-white"
    >
      <FileDownIcon
        class="transition ease-in-out group-hover:scale-125 float-left group-hover:text-primary lg:mr-2 mr-0"
      /><span class="lg:inline text-xs font-medium hidden"> download as pdf</span>
    </RouterLink>
    <div
      v-else
      v-if="user.role == 'admin'"
      @click="saveData"
      class="flex items-center cursor-pointer group float-right uppercase min-w-max rounded-lg bg-blue-500 -my-2 p-1 px-2 hover:scale-125 transition duration-500 ease-in-out text-white"
    >
      <SaveIcon
        class="transition ease-in-out group-hover:scale-125 float-left group-hover:text-primary lg:mr-2 mr-0"
      /><span class="lg:inline text-xs font-medium hidden mr-2"> Save</span>
    </div>
  </div>
  <div class="px-5 lg:px-48 rounded-lg text-sm lg:text-base pb-[20vh]">
    <TabGroup class="w-full">
      <TabList class="nav nav-link-tabs">
        <Tab class="w-full py-2" tag="button">General</Tab>
        <Tab class="w-full py-2" tag="button">Checklist</Tab>
        <Tab class="truncate w-full py-2" tag="button">Inspector(s) Signature</Tab>
      </TabList>
      <TabPanels class="">
        <TabPanel class="">
          <div class="flex">
            <button type="button" class="flex-1">
              <h4 class="text-xl text-left py-4">General Information</h4></button
            ><button type="button" class="ml-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
                class="w-5 h-5"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M20 12H4"></path>
              </svg>
            </button>
          </div>
          <hr />
          <div class="block">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div class="py-2">
                <label for="form-date" class="block text-sm font-medium text-gray-700"
                  >1)Date & 2)Time</label
                ><input
                  type="datetime-local"
                  id="form-date"
                  class="t-form"
                  name="date"
                  required
                  :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                  v-model="data_utama._1_2"
                />
              </div>
              <div class="py-2">
                <label for="form-place" class="block text-sm font-medium text-gray-700"
                  >3)Place</label
                ><input
                  type="text"
                  id="form-place"
                  class="t-form"
                  name="place"
                  required
                  :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                  v-model="data_utama._3"
                />
              </div>
              <div class="py-2">
                <label for="form-operator" class="block text-sm font-medium text-gray-700"
                  >4)Operator</label
                ><input
                  type="text"
                  id="form-operator"
                  class="t-form"
                  name="place"
                  required
                  :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                  v-model="data_utama._4"
                />
              </div>
              <div class="py-2">
                <label for="form-state" class="block text-sm font-medium text-gray-700"
                  >5)State</label
                ><input
                  type="text"
                  id="form-state"
                  class="t-form"
                  name="place"
                  required
                  :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                  v-model="data_utama._5"
                />
              </div>
              <div class="py-2">
                <label for="form-state" class="block text-sm font-medium text-gray-700"
                  >6)AOC No</label
                ><input
                  type="text"
                  id="form-state"
                  class="t-form"
                  name="place"
                  required
                  :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                  v-model="data_utama._6"
                />
              </div>

              <div class="py-2">
                <label for="form-rf" class="block text-sm font-medium text-gray-700"
                  >7)Route From</label
                ><input
                  type="text"
                  id="form-rf"
                  class="t-form"
                  name="date"
                  required
                  :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                  v-model="data_utama._7"
                />
              </div>
              <div class="py-2">
                <label for="form-flight-no" class="block text-sm font-medium text-gray-700"
                  >8)Flight No</label
                ><input
                  type="text"
                  id="form-flight-no"
                  class="t-form"
                  name="place"
                  required
                  :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                  v-model="data_utama._8"
                />
              </div>
              <div class="py-2">
                <label for="form-rt" class="block text-sm font-medium text-gray-700"
                  >9)Route To</label
                ><input
                  type="text"
                  id="form-rt"
                  class="t-form"
                  name="date"
                  required
                  :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                  v-model="data_utama._9"
                />
              </div>
              <div class="py-2">
                <label for="form-flight-no" class="block text-sm font-medium text-gray-700"
                  >10)Flight No</label
                ><input
                  type="text"
                  id="form-flight-no"
                  class="t-form"
                  name="place"
                  required
                  :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                  v-model="data_utama._10"
                />
                <div class="py-2 mt-8">
                  <label for="form-flight-no" class="block text-sm font-medium text-gray-700"
                    >12)Aircraft Model</label
                  ><input
                    type="text"
                    id="form-flight-no"
                    class="t-form"
                    name="place"
                    required
                    :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                    v-model="data_utama._12"
                  />
                </div>
              </div>
              <div class="py-2">
                <label
                  for="form-type-of-operation-1"
                  class="block text-sm font-medium text-gray-700"
                  >11)Type of Operation</label
                >
                <div class="mt-1 border border-gray-300 rounded-md bg-white">
                  <label
                    for="type_of_operation_1"
                    class="w-full flex border-b border-gray-300 hover:bg-gray-50 p-3 cursor-pointer"
                    ><input
                      id="type_of_operation_1"
                      type="checkbox"
                      name="type_of_operation_1"
                      class="mr-3 h-6 w-6"
                      :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                      v-model="data_utama._11.passenger"
                    /><span class="text-sm font-medium text-gray-700 uppercase"
                      >Passenger</span
                    ></label
                  ><label
                    for="type_of_operation_2"
                    class="w-full flex border-b border-gray-300 hover:bg-gray-50 p-3 cursor-pointer"
                    ><input
                      id="type_of_operation_2"
                      type="checkbox"
                      name="type_of_operation_2"
                      class="mr-3 h-6 w-6"
                      :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                      v-model="data_utama._11.cargo"
                    /><span class="text-sm font-medium text-gray-700 uppercase">Cargo</span></label
                  ><label
                    for="type_of_operation_3"
                    class="w-full flex border-b border-gray-300 hover:bg-gray-50 p-3 cursor-pointer"
                    ><input
                      id="type_of_operation_3"
                      type="checkbox"
                      name="type_of_operation_3"
                      class="mr-3 h-6 w-6"
                      :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                      v-model="data_utama._11.other"
                    /><span class="text-sm font-medium text-gray-700 uppercase">other</span></label
                  >
                </div>
              </div>

              <div class="py-2">
                <label for="form-rt" class="block text-sm font-medium text-gray-700"
                  >13)Registration Mark</label
                ><input
                  type="text"
                  id="form-rt"
                  class="t-form"
                  name="date"
                  required
                  :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                  v-model="data_utama._13"
                />
                <div class="py-2 my-8">
                  <label for="form-flight-no" class="block text-sm font-medium text-gray-700"
                    >15)Flight Crew State of Licensing</label
                  ><input
                    type="text"
                    id="form-flight-no"
                    class="t-form"
                    name="place"
                    required
                    :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                    v-model="data_utama._15"
                  />
                </div>
              </div>

              <div class="md:py-2">
                <label for="form-flight-no" class="block text-sm font-medium text-gray-700"
                  >14)Serial Number</label
                ><input
                  type="text"
                  id="form-flight-no"
                  class="t-form"
                  name="place"
                  required
                  :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                  v-model="data_utama._14"
                />
                <div class="py-2 my-8">
                  <label
                    for="form-type-of-operation-1"
                    class="block text-sm font-medium text-gray-700"
                    >16)Acknowledgement Of Receipt (*)</label
                  >
                  <div class="mt-1 border border-gray-300 rounded-md bg-white">
                    <label
                      for="type_of_operation_1"
                      class="w-full flex border-b border-gray-300 hover:bg-gray-50 p-3 cursor-pointer"
                    >
                      <label
                        for="form-flight-no"
                        class="block text-sm font-medium text-gray-700 mx-2 py-3 w-20"
                        >Nama</label
                      ><input
                        type="text"
                        id="form-flight-no"
                        class="t-form"
                        name="place"
                        required
                        :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                        v-model="data_utama._16.name"
                    /></label>
                    <label
                      for="type_of_operation_1"
                      class="w-full flex border-b border-gray-300 hover:bg-gray-50 p-3 cursor-pointer"
                    >
                      <label
                        for="form-flight-no"
                        class="block text-sm font-medium text-gray-700 mx-2 py-3 w-20"
                        >Function</label
                      ><input
                        type="text"
                        id="form-flight-no"
                        class="t-form"
                        name="place"
                        required
                        :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                        v-model="data_utama._16.function"
                    /></label>
                    <label
                      for="type_of_operation_1"
                      class="w-full flex border-b border-gray-300 hover:bg-gray-50 p-3 cursor-pointer"
                    >
                      <label
                        for="form-flight-no"
                        class="block text-sm font-medium text-gray-700 mx-2 py-3 w-20"
                        >Signature</label
                      ><input
                        type="text"
                        id="form-flight-no"
                        class="t-form"
                        name="place"
                        required
                        :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                        v-model="data_utama._16.signature"
                    /></label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel class="">
          <div class="w-full">
            <AccordionGroup class="accordion-boxed">
              <AccordionItem class="">
                <Accordion class="bg-white p-2 border-b border-black">
                  A FLIGHT DECK <span class="float-right"><ChevronsDownUpIcon /></span
                ></Accordion>
                <AccordionPanel class="mt-5 h-[40vh] md:h-[53vh] overflow-y-auto">
                  <div
                    class="col-span-12 lg:grid grid-cols-12 border border-black p-2 rounded-lg my-3 items-center hover:scale-105 transition duration-500 ease-in-out hover:border-2 bg-white hover:bg-slate-50"
                  >
                    <div class="col-span-8 mb-1 p-2">
                      <span class="font-bold">1) </span>General Condition
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:-my-2 -mx-2 -mb-2">
                      <table class="w-full">
                        <tr>
                          <th
                            class="text-center border-b border-x-0 lg:border-x border-r border-y lg:border-t-0 border-black"
                          >
                            CHECK
                          </th>
                          <th class="text-center lg:border-t-0 border-y border-b border-black">
                            REMARK
                          </th>
                        </tr>
                        <tr>
                          <td class="text-center w-14 h-14 md:border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.a._1.check"
                            />
                          </td>
                          <td class="text-center w-14 h-14 border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.a._1.remark"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-span-12 lg:grid grid-cols-12 border border-black p-2 rounded-lg my-3 items-center hover:scale-105 transition duration-500 ease-in-out hover:border-2 bg-white hover:bg-slate-50"
                  >
                    <div class="col-span-8 mb-1 p-2">
                      <span class="font-bold">2) </span>Emergency exit
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:-my-2 -mx-2 -mb-2">
                      <table class="w-full">
                        <tr>
                          <th
                            class="text-center border-b border-x-0 lg:border-x border-r border-y lg:border-t-0 border-black"
                          >
                            CHECK
                          </th>
                          <th class="text-center lg:border-t-0 border-y border-b border-black">
                            REMARK
                          </th>
                        </tr>
                        <tr>
                          <td class="text-center w-14 h-14 md:border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.a._2.check"
                            />
                          </td>
                          <td class="text-center w-14 h-14 border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.a._2.remark"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-span-12 lg:grid grid-cols-12 border border-black p-2 rounded-lg my-3 items-center hover:scale-105 transition duration-500 ease-in-out hover:border-2 bg-white hover:bg-slate-50"
                  >
                    <div class="col-span-8 mb-1 p-2">
                      <span class="font-bold">3) </span>Equipment
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:-my-2 -mx-2 -mb-2">
                      <table class="w-full">
                        <tr>
                          <th
                            class="text-center border-b border-x-0 lg:border-x border-r border-y lg:border-t-0 border-black"
                          >
                            CHECK
                          </th>
                          <th class="text-center lg:border-t-0 border-y border-b border-black">
                            REMARK
                          </th>
                        </tr>
                        <tr>
                          <td class="text-center w-14 h-14 md:border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.a._3.check"
                            />
                          </td>
                          <td class="text-center w-14 h-14 border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.a._3.remark"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  Documentation
                  <hr />
                  <div
                    class="col-span-12 lg:grid grid-cols-12 border border-black p-2 rounded-lg my-3 items-center hover:scale-105 transition duration-500 ease-in-out hover:border-2 bg-white hover:bg-slate-50"
                  >
                    <div class="col-span-8 mb-1 p-2"><span class="font-bold">4) </span>Manuals</div>
                    <div class="col-span-12 lg:col-span-4 lg:-my-2 -mx-2 -mb-2">
                      <table class="w-full">
                        <tr>
                          <th
                            class="text-center border-b border-x-0 lg:border-x border-r border-y lg:border-t-0 border-black"
                          >
                            CHECK
                          </th>
                          <th class="text-center lg:border-t-0 border-y border-b border-black">
                            REMARK
                          </th>
                        </tr>
                        <tr>
                          <td class="text-center w-14 h-14 md:border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.a._4.check"
                            />
                          </td>
                          <td class="text-center w-14 h-14 border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.a._4.remark"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-span-12 lg:grid grid-cols-12 border border-black p-2 rounded-lg my-3 items-center hover:scale-105 transition duration-500 ease-in-out hover:border-2 bg-white hover:bg-slate-50"
                  >
                    <div class="col-span-8 mb-1 p-2">
                      <span class="font-bold">5) </span>Checklists
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:-my-2 -mx-2 -mb-2">
                      <table class="w-full">
                        <tr>
                          <th
                            class="text-center border-b border-x-0 lg:border-x border-r border-y lg:border-t-0 border-black"
                          >
                            CHECK
                          </th>
                          <th class="text-center lg:border-t-0 border-y border-b border-black">
                            REMARK
                          </th>
                        </tr>
                        <tr>
                          <td class="text-center w-14 h-14 md:border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.a._5.check"
                            />
                          </td>
                          <td class="text-center w-14 h-14 border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.a._5.remark"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-span-12 lg:grid grid-cols-12 border border-black p-2 rounded-lg my-3 items-center hover:scale-105 transition duration-500 ease-in-out hover:border-2 bg-white hover:bg-slate-50"
                  >
                    <div class="col-span-8 mb-1 p-2">
                      <span class="font-bold">6) </span>Navigation/Instrument charts
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:-my-2 -mx-2 -mb-2">
                      <table class="w-full">
                        <tr>
                          <th
                            class="text-center border-b border-x-0 lg:border-x border-r border-y lg:border-t-0 border-black"
                          >
                            CHECK
                          </th>
                          <th class="text-center lg:border-t-0 border-y border-b border-black">
                            REMARK
                          </th>
                        </tr>
                        <tr>
                          <td class="text-center w-14 h-14 md:border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.a._6.check"
                            />
                          </td>
                          <td class="text-center w-14 h-14 border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.a._6.remark"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-span-12 lg:grid grid-cols-12 border border-black p-2 rounded-lg my-3 items-center hover:scale-105 transition duration-500 ease-in-out hover:border-2 bg-white hover:bg-slate-50"
                  >
                    <div class="col-span-8 mb-1 p-2">
                      <span class="font-bold">7) </span>Minimum Equipment List
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:-my-2 -mx-2 -mb-2">
                      <table class="w-full">
                        <tr>
                          <th
                            class="text-center border-b border-x-0 lg:border-x border-r border-y lg:border-t-0 border-black"
                          >
                            CHECK
                          </th>
                          <th class="text-center lg:border-t-0 border-y border-b border-black">
                            REMARK
                          </th>
                        </tr>
                        <tr>
                          <td class="text-center w-14 h-14 md:border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.a._7.check"
                            />
                          </td>
                          <td class="text-center w-14 h-14 border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.a._7.remark"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-span-12 lg:grid grid-cols-12 border border-black p-2 rounded-lg my-3 items-center hover:scale-105 transition duration-500 ease-in-out hover:border-2 bg-white hover:bg-slate-50"
                  >
                    <div class="col-span-8 mb-1 p-2">
                      <span class="font-bold">8) </span>Certificate of Registration
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:-my-2 -mx-2 -mb-2">
                      <table class="w-full">
                        <tr>
                          <th
                            class="text-center border-b border-x-0 lg:border-x border-r border-y lg:border-t-0 border-black"
                          >
                            CHECK
                          </th>
                          <th class="text-center lg:border-t-0 border-y border-b border-black">
                            REMARK
                          </th>
                        </tr>
                        <tr>
                          <td class="text-center w-14 h-14 md:border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.a._8.check"
                            />
                          </td>
                          <td class="text-center w-14 h-14 border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.a._8.remark"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-span-12 lg:grid grid-cols-12 border border-black p-2 rounded-lg my-3 items-center hover:scale-105 transition duration-500 ease-in-out hover:border-2 bg-white hover:bg-slate-50"
                  >
                    <div class="col-span-8 mb-1 p-2">
                      <span class="font-bold">9) </span>Noise Certificate (where applicable)
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:-my-2 -mx-2 -mb-2">
                      <table class="w-full">
                        <tr>
                          <th
                            class="text-center border-b border-x-0 lg:border-x border-r border-y lg:border-t-0 border-black"
                          >
                            CHECK
                          </th>
                          <th class="text-center lg:border-t-0 border-y border-b border-black">
                            REMARK
                          </th>
                        </tr>
                        <tr>
                          <td class="text-center w-14 h-14 md:border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.a._9.check"
                            />
                          </td>
                          <td class="text-center w-14 h-14 border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.a._9.remark"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-span-12 lg:grid grid-cols-12 border border-black p-2 rounded-lg my-3 items-center hover:scale-105 transition duration-500 ease-in-out hover:border-2 bg-white hover:bg-slate-50"
                  >
                    <div class="col-span-8 mb-1 p-2">
                      <span class="font-bold">10) </span>AOC or Equivalent
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:-my-2 -mx-2 -mb-2">
                      <table class="w-full">
                        <tr>
                          <th
                            class="text-center border-b border-x-0 lg:border-x border-r border-y lg:border-t-0 border-black"
                          >
                            CHECK
                          </th>
                          <th class="text-center lg:border-t-0 border-y border-b border-black">
                            REMARK
                          </th>
                        </tr>
                        <tr>
                          <td class="text-center w-14 h-14 md:border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.a._10.check"
                            />
                          </td>
                          <td class="text-center w-14 h-14 border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.a._10.remark"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-span-12 lg:grid grid-cols-12 border border-black p-2 rounded-lg my-3 items-center hover:scale-105 transition duration-500 ease-in-out hover:border-2 bg-white hover:bg-slate-50"
                  >
                    <div class="col-span-8 mb-1 p-2">
                      <span class="font-bold">11) </span>Radio License
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:-my-2 -mx-2 -mb-2">
                      <table class="w-full">
                        <tr>
                          <th
                            class="text-center border-b border-x-0 lg:border-x border-r border-y lg:border-t-0 border-black"
                          >
                            CHECK
                          </th>
                          <th class="text-center lg:border-t-0 border-y border-b border-black">
                            REMARK
                          </th>
                        </tr>
                        <tr>
                          <td class="text-center w-14 h-14 md:border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.a._11.check"
                            />
                          </td>
                          <td class="text-center w-14 h-14 border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.a._11.remark"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-span-12 lg:grid grid-cols-12 border border-black p-2 rounded-lg my-3 items-center hover:scale-105 transition duration-500 ease-in-out hover:border-2 bg-white hover:bg-slate-50"
                  >
                    <div class="col-span-8 mb-1 p-2">
                      <span class="font-bold">12) </span>Certificate of Airworthiness
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:-my-2 -mx-2 -mb-2">
                      <table class="w-full">
                        <tr>
                          <th
                            class="text-center border-b border-x-0 lg:border-x border-r border-y lg:border-t-0 border-black"
                          >
                            CHECK
                          </th>
                          <th class="text-center lg:border-t-0 border-y border-b border-black">
                            REMARK
                          </th>
                        </tr>
                        <tr>
                          <td class="text-center w-14 h-14 md:border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.a._12.check"
                            />
                          </td>
                          <td class="text-center w-14 h-14 border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.a._12.remark"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  Flight Data
                  <hr />
                  <div
                    class="col-span-12 lg:grid grid-cols-12 border border-black p-2 rounded-lg my-3 items-center hover:scale-105 transition duration-500 ease-in-out hover:border-2 bg-white hover:bg-slate-50"
                  >
                    <div class="col-span-8 mb-1 p-2">
                      <span class="font-bold">13) </span>Flight preparation
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:-my-2 -mx-2 -mb-2">
                      <table class="w-full">
                        <tr>
                          <th
                            class="text-center border-b border-x-0 lg:border-x border-r border-y lg:border-t-0 border-black"
                          >
                            CHECK
                          </th>
                          <th class="text-center lg:border-t-0 border-y border-b border-black">
                            REMARK
                          </th>
                        </tr>
                        <tr>
                          <td class="text-center w-14 h-14 md:border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.a._13.check"
                            />
                          </td>
                          <td class="text-center w-14 h-14 border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.a._13.remark"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-span-12 lg:grid grid-cols-12 border border-black p-2 rounded-lg my-3 items-center hover:scale-105 transition duration-500 ease-in-out hover:border-2 bg-white hover:bg-slate-50"
                  >
                    <div class="col-span-8 mb-1 p-2">
                      <span class="font-bold">14) </span>Weight and Balance sheet
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:-my-2 -mx-2 -mb-2">
                      <table class="w-full">
                        <tr>
                          <th
                            class="text-center border-b border-x-0 lg:border-x border-r border-y lg:border-t-0 border-black"
                          >
                            CHECK
                          </th>
                          <th class="text-center lg:border-t-0 border-y border-b border-black">
                            REMARK
                          </th>
                        </tr>
                        <tr>
                          <td class="text-center w-14 h-14 md:border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.a._14.check"
                            />
                          </td>
                          <td class="text-center w-14 h-14 border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.a._14.remark"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  Safety Equipment
                  <hr />
                  <div
                    class="col-span-12 lg:grid grid-cols-12 border border-black p-2 rounded-lg my-3 items-center hover:scale-105 transition duration-500 ease-in-out hover:border-2 bg-white hover:bg-slate-50"
                  >
                    <div class="col-span-8 mb-1 p-2">
                      <span class="font-bold">15) </span>Hand fire extinguishers
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:-my-2 -mx-2 -mb-2">
                      <table class="w-full">
                        <tr>
                          <th
                            class="text-center border-b border-x-0 lg:border-x border-r border-y lg:border-t-0 border-black"
                          >
                            CHECK
                          </th>
                          <th class="text-center lg:border-t-0 border-y border-b border-black">
                            REMARK
                          </th>
                        </tr>
                        <tr>
                          <td class="text-center w-14 h-14 md:border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.a._15.check"
                            />
                          </td>
                          <td class="text-center w-14 h-14 border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.a._15.remark"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-span-12 lg:grid grid-cols-12 border border-black p-2 rounded-lg my-3 items-center hover:scale-105 transition duration-500 ease-in-out hover:border-2 bg-white hover:bg-slate-50"
                  >
                    <div class="col-span-8 mb-1 p-2">
                      <span class="font-bold">16) </span>Life jackets/flotation devices
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:-my-2 -mx-2 -mb-2">
                      <table class="w-full">
                        <tr>
                          <th
                            class="text-center border-b border-x-0 lg:border-x border-r border-y lg:border-t-0 border-black"
                          >
                            CHECK
                          </th>
                          <th class="text-center lg:border-t-0 border-y border-b border-black">
                            REMARK
                          </th>
                        </tr>
                        <tr>
                          <td class="text-center w-14 h-14 md:border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.a._16.check"
                            />
                          </td>
                          <td class="text-center w-14 h-14 border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.a._16.remark"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-span-12 lg:grid grid-cols-12 border border-black p-2 rounded-lg my-3 items-center hover:scale-105 transition duration-500 ease-in-out hover:border-2 bg-white hover:bg-slate-50"
                  >
                    <div class="col-span-8 mb-1 p-2">
                      <span class="font-bold">17) </span>Safety Harness
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:-my-2 -mx-2 -mb-2">
                      <table class="w-full">
                        <tr>
                          <th
                            class="text-center border-b border-x-0 lg:border-x border-r border-y lg:border-t-0 border-black"
                          >
                            CHECK
                          </th>
                          <th class="text-center lg:border-t-0 border-y border-b border-black">
                            REMARK
                          </th>
                        </tr>
                        <tr>
                          <td class="text-center w-14 h-14 md:border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.a._17.check"
                            />
                          </td>
                          <td class="text-center w-14 h-14 border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.a._17.remark"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-span-12 lg:grid grid-cols-12 border border-black p-2 rounded-lg my-3 items-center hover:scale-105 transition duration-500 ease-in-out hover:border-2 bg-white hover:bg-slate-50"
                  >
                    <div class="col-span-8 mb-1 p-2">
                      <span class="font-bold">18) </span>Oxygen Equipment
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:-my-2 -mx-2 -mb-2">
                      <table class="w-full">
                        <tr>
                          <th
                            class="text-center border-b border-x-0 lg:border-x border-r border-y lg:border-t-0 border-black"
                          >
                            CHECK
                          </th>
                          <th class="text-center lg:border-t-0 border-y border-b border-black">
                            REMARK
                          </th>
                        </tr>
                        <tr>
                          <td class="text-center w-14 h-14 md:border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.a._18.check"
                            />
                          </td>
                          <td class="text-center w-14 h-14 border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.a._18.remark"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-span-12 lg:grid grid-cols-12 border border-black p-2 rounded-lg my-3 items-center hover:scale-105 transition duration-500 ease-in-out hover:border-2 bg-white hover:bg-slate-50"
                  >
                    <div class="col-span-8 mb-1 p-2">
                      <span class="font-bold">19) </span>Flash light and crash axe
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:-my-2 -mx-2 -mb-2">
                      <table class="w-full">
                        <tr>
                          <th
                            class="text-center border-b border-x-0 lg:border-x border-r border-y lg:border-t-0 border-black"
                          >
                            CHECK
                          </th>
                          <th class="text-center lg:border-t-0 border-y border-b border-black">
                            REMARK
                          </th>
                        </tr>
                        <tr>
                          <td class="text-center w-14 h-14 md:border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.a._19.check"
                            />
                          </td>
                          <td class="text-center w-14 h-14 border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.a._19.remark"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  Flight crew
                  <hr />
                  <div
                    class="col-span-12 lg:grid grid-cols-12 border border-black p-2 rounded-lg my-3 items-center hover:scale-105 transition duration-500 ease-in-out hover:border-2 bg-white hover:bg-slate-50"
                  >
                    <div class="col-span-8 mb-1 p-2">
                      <span class="font-bold">20) </span>Flight crew license and required equipment
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:-my-2 -mx-2 -mb-2">
                      <table class="w-full">
                        <tr>
                          <th
                            class="text-center border-b border-x-0 lg:border-x border-r border-y lg:border-t-0 border-black"
                          >
                            CHECK
                          </th>
                          <th class="text-center lg:border-t-0 border-y border-b border-black">
                            REMARK
                          </th>
                        </tr>
                        <tr>
                          <td class="text-center w-14 h-14 md:border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.a._20.check"
                            />
                          </td>
                          <td class="text-center w-14 h-14 border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.a._20.remark"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  Journey log book/Technical log or equivalent
                  <hr />
                  <div
                    class="col-span-12 lg:grid grid-cols-12 border border-black p-2 rounded-lg my-3 items-center hover:scale-105 transition duration-500 ease-in-out hover:border-2 bg-white hover:bg-slate-50"
                  >
                    <div class="col-span-8 mb-1 p-2">
                      <span class="font-bold">21) </span>Journey log book or equivalent
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:-my-2 -mx-2 -mb-2">
                      <table class="w-full">
                        <tr>
                          <th
                            class="text-center border-b border-x-0 lg:border-x border-r border-y lg:border-t-0 border-black"
                          >
                            CHECK
                          </th>
                          <th class="text-center lg:border-t-0 border-y border-b border-black">
                            REMARK
                          </th>
                        </tr>
                        <tr>
                          <td class="text-center w-14 h-14 md:border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.a._21.check"
                            />
                          </td>
                          <td class="text-center w-14 h-14 border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.a._21.remark"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-span-12 lg:grid grid-cols-12 border border-black p-2 rounded-lg my-3 items-center hover:scale-105 transition duration-500 ease-in-out hover:border-2 bg-white hover:bg-slate-50"
                  >
                    <div class="col-span-8 mb-1 p-2">
                      <span class="font-bold">22) </span>Maintenance release
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:-my-2 -mx-2 -mb-2">
                      <table class="w-full">
                        <tr>
                          <th
                            class="text-center border-b border-x-0 lg:border-x border-r border-y lg:border-t-0 border-black"
                          >
                            CHECK
                          </th>
                          <th class="text-center lg:border-t-0 border-y border-b border-black">
                            REMARK
                          </th>
                        </tr>
                        <tr>
                          <td class="text-center w-14 h-14 md:border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.a._22.check"
                            />
                          </td>
                          <td class="text-center w-14 h-14 border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.a._22.remark"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-span-12 lg:grid grid-cols-12 border border-black p-2 rounded-lg my-3 items-center hover:scale-105 transition duration-500 ease-in-out hover:border-2 bg-white hover:bg-slate-50"
                  >
                    <div class="col-span-8 mb-1 p-2">
                      <span class="font-bold">23) </span>Defect notification and rectification
                      (incl. Tech Log)
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:-my-2 -mx-2 -mb-2">
                      <table class="w-full">
                        <tr>
                          <th
                            class="text-center border-b border-x-0 lg:border-x border-r border-y lg:border-t-0 border-black"
                          >
                            CHECK
                          </th>
                          <th class="text-center lg:border-t-0 border-y border-b border-black">
                            REMARK
                          </th>
                        </tr>
                        <tr>
                          <td class="text-center w-14 h-14 md:border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.a._23.check"
                            />
                          </td>
                          <td class="text-center w-14 h-14 border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.a._23.remark"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-span-12 lg:grid grid-cols-12 border border-black p-2 rounded-lg my-3 items-center hover:scale-105 transition duration-500 ease-in-out hover:border-2 bg-white hover:bg-slate-50"
                  >
                    <div class="col-span-8 mb-1 p-2">
                      <span class="font-bold">24) </span>Pre-flight inspection
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:-my-2 -mx-2 -mb-2">
                      <table class="w-full">
                        <tr>
                          <th
                            class="text-center border-b border-x-0 lg:border-x border-r border-y lg:border-t-0 border-black"
                          >
                            CHECK
                          </th>
                          <th class="text-center lg:border-t-0 border-y border-b border-black">
                            REMARK
                          </th>
                        </tr>
                        <tr>
                          <td class="text-center w-14 h-14 md:border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.a._24.check"
                            />
                          </td>
                          <td class="text-center w-14 h-14 border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.a._24.remark"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-span-12 lg:grid grid-cols-12 border border-black p-2 rounded-lg my-3 items-center hover:scale-105 transition duration-500 ease-in-out hover:border-2 bg-white hover:bg-slate-50"
                  >
                    <div class="col-span-8 mb-1 p-2">
                      <span class="font-bold">25) </span>ETOPS/EDTO Requirements (if applicable)
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:-my-2 -mx-2 -mb-2">
                      <table class="w-full">
                        <tr>
                          <th
                            class="text-center border-b border-x-0 lg:border-x border-r border-y lg:border-t-0 border-black"
                          >
                            CHECK
                          </th>
                          <th class="text-center lg:border-t-0 border-y border-b border-black">
                            REMARK
                          </th>
                        </tr>
                        <tr>
                          <td class="text-center w-14 h-14 md:border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.a._25.check"
                            />
                          </td>
                          <td class="text-center w-14 h-14 border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.a._25.remark"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem class="">
                <Accordion class="bg-white p-2 border-b border-black">
                  B SAFETY/ CABIN <span class="float-right"><ChevronsDownUpIcon /></span
                ></Accordion>
                <AccordionPanel class="mt-5 h-[40vh] md:h-[53vh] overflow-y-auto">
                  <div
                    class="col-span-12 lg:grid grid-cols-12 border border-black p-2 rounded-lg my-3 items-center hover:scale-105 transition duration-500 ease-in-out hover:border-2 bg-white hover:bg-slate-50"
                  >
                    <div class="col-span-8 mb-1 p-2">
                      <span class="font-bold">1) </span>General internal Condition and placard
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:-my-2 -mx-2 -mb-2">
                      <table class="w-full">
                        <tr>
                          <th
                            class="text-center border-b border-x-0 lg:border-x border-r border-y lg:border-t-0 border-black"
                          >
                            CHECK
                          </th>
                          <th class="text-center lg:border-t-0 border-y border-b border-black">
                            REMARK
                          </th>
                        </tr>
                        <tr>
                          <td class="text-center w-14 h-14 md:border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.b._1.check"
                            />
                          </td>
                          <td class="text-center w-14 h-14 border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.b._1.remark"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-span-12 lg:grid grid-cols-12 border border-black p-2 rounded-lg my-3 items-center hover:scale-105 transition duration-500 ease-in-out hover:border-2 bg-white hover:bg-slate-50"
                  >
                    <div class="col-span-8 mb-1 p-2">
                      <span class="font-bold">2) </span>Cabin attendants station and crew rest area
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:-my-2 -mx-2 -mb-2">
                      <table class="w-full">
                        <tr>
                          <th
                            class="text-center border-b border-x-0 lg:border-x border-r border-y lg:border-t-0 border-black"
                          >
                            CHECK
                          </th>
                          <th class="text-center lg:border-t-0 border-y border-b border-black">
                            REMARK
                          </th>
                        </tr>
                        <tr>
                          <td class="text-center w-14 h-14 md:border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.b._2.check"
                            />
                          </td>
                          <td class="text-center w-14 h-14 border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.b._2.remark"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-span-12 lg:grid grid-cols-12 border border-black p-2 rounded-lg my-3 items-center hover:scale-105 transition duration-500 ease-in-out hover:border-2 bg-white hover:bg-slate-50"
                  >
                    <div class="col-span-8 mb-1 p-2">
                      <span class="font-bold">3) </span>First aid kit, emergency medical kit
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:-my-2 -mx-2 -mb-2">
                      <table class="w-full">
                        <tr>
                          <th
                            class="text-center border-b border-x-0 lg:border-x border-r border-y lg:border-t-0 border-black"
                          >
                            CHECK
                          </th>
                          <th class="text-center lg:border-t-0 border-y border-b border-black">
                            REMARK
                          </th>
                        </tr>
                        <tr>
                          <td class="text-center w-14 h-14 md:border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.b._3.check"
                            />
                          </td>
                          <td class="text-center w-14 h-14 border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.b._3.remark"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-span-12 lg:grid grid-cols-12 border border-black p-2 rounded-lg my-3 items-center hover:scale-105 transition duration-500 ease-in-out hover:border-2 bg-white hover:bg-slate-50"
                  >
                    <div class="col-span-8 mb-1 p-2">
                      <span class="font-bold">4) </span>Fire extinguisher and PBE
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:-my-2 -mx-2 -mb-2">
                      <table class="w-full">
                        <tr>
                          <th
                            class="text-center border-b border-x-0 lg:border-x border-r border-y lg:border-t-0 border-black"
                          >
                            CHECK
                          </th>
                          <th class="text-center lg:border-t-0 border-y border-b border-black">
                            REMARK
                          </th>
                        </tr>
                        <tr>
                          <td class="text-center w-14 h-14 md:border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.b._4.check"
                            />
                          </td>
                          <td class="text-center w-14 h-14 border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.b._4.remark"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-span-12 lg:grid grid-cols-12 border border-black p-2 rounded-lg my-3 items-center hover:scale-105 transition duration-500 ease-in-out hover:border-2 bg-white hover:bg-slate-50"
                  >
                    <div class="col-span-8 mb-1 p-2">
                      <span class="font-bold">5) </span>Life jackets/ flotation devices
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:-my-2 -mx-2 -mb-2">
                      <table class="w-full">
                        <tr>
                          <th
                            class="text-center border-b border-x-0 lg:border-x border-r border-y lg:border-t-0 border-black"
                          >
                            CHECK
                          </th>
                          <th class="text-center lg:border-t-0 border-y border-b border-black">
                            REMARK
                          </th>
                        </tr>
                        <tr>
                          <td class="text-center w-14 h-14 md:border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.b._5.check"
                            />
                          </td>
                          <td class="text-center w-14 h-14 border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.b._5.remark"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-span-12 lg:grid grid-cols-12 border border-black p-2 rounded-lg my-3 items-center hover:scale-105 transition duration-500 ease-in-out hover:border-2 bg-white hover:bg-slate-50"
                  >
                    <div class="col-span-8 mb-1 p-2">
                      <span class="font-bold">6) </span>Seat belt and seat condition
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:-my-2 -mx-2 -mb-2">
                      <table class="w-full">
                        <tr>
                          <th
                            class="text-center border-b border-x-0 lg:border-x border-r border-y lg:border-t-0 border-black"
                          >
                            CHECK
                          </th>
                          <th class="text-center lg:border-t-0 border-y border-b border-black">
                            REMARK
                          </th>
                        </tr>
                        <tr>
                          <td class="text-center w-14 h-14 md:border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.b._6.check"
                            />
                          </td>
                          <td class="text-center w-14 h-14 border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.b._6.remark"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-span-12 lg:grid grid-cols-12 border border-black p-2 rounded-lg my-3 items-center hover:scale-105 transition duration-500 ease-in-out hover:border-2 bg-white hover:bg-slate-50"
                  >
                    <div class="col-span-8 mb-1 p-2">
                      <span class="font-bold">7) </span>Emergency exit, lighting, marking, flash
                      light, and megaphone
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:-my-2 -mx-2 -mb-2">
                      <table class="w-full">
                        <tr>
                          <th
                            class="text-center border-b border-x-0 lg:border-x border-r border-y lg:border-t-0 border-black"
                          >
                            CHECK
                          </th>
                          <th class="text-center lg:border-t-0 border-y border-b border-black">
                            REMARK
                          </th>
                        </tr>
                        <tr>
                          <td class="text-center w-14 h-14 md:border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.b._7.check"
                            />
                          </td>
                          <td class="text-center w-14 h-14 border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.b._7.remark"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-span-12 lg:grid grid-cols-12 border border-black p-2 rounded-lg my-3 items-center hover:scale-105 transition duration-500 ease-in-out hover:border-2 bg-white hover:bg-slate-50"
                  >
                    <div class="col-span-8 mb-1 p-2">
                      <span class="font-bold">8) </span>Slides, Life-Rafts (as required) and ELT
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:-my-2 -mx-2 -mb-2">
                      <table class="w-full">
                        <tr>
                          <th
                            class="text-center border-b border-x-0 lg:border-x border-r border-y lg:border-t-0 border-black"
                          >
                            CHECK
                          </th>
                          <th class="text-center lg:border-t-0 border-y border-b border-black">
                            REMARK
                          </th>
                        </tr>
                        <tr>
                          <td class="text-center w-14 h-14 md:border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.b._8.check"
                            />
                          </td>
                          <td class="text-center w-14 h-14 border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.b._8.remark"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-span-12 lg:grid grid-cols-12 border border-black p-2 rounded-lg my-3 items-center hover:scale-105 transition duration-500 ease-in-out hover:border-2 bg-white hover:bg-slate-50"
                  >
                    <div class="col-span-8 mb-1 p-2">
                      <span class="font-bold">9) </span>Oxygen supply (cabin crew and passengers)
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:-my-2 -mx-2 -mb-2">
                      <table class="w-full">
                        <tr>
                          <th
                            class="text-center border-b border-x-0 lg:border-x border-r border-y lg:border-t-0 border-black"
                          >
                            CHECK
                          </th>
                          <th class="text-center lg:border-t-0 border-y border-b border-black">
                            REMARK
                          </th>
                        </tr>
                        <tr>
                          <td class="text-center w-14 h-14 md:border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.b._9.check"
                            />
                          </td>
                          <td class="text-center w-14 h-14 border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.b._9.remark"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-span-12 lg:grid grid-cols-12 border border-black p-2 rounded-lg my-3 items-center hover:scale-105 transition duration-500 ease-in-out hover:border-2 bg-white hover:bg-slate-50"
                  >
                    <div class="col-span-8 mb-1 p-2">
                      <span class="font-bold">10) </span>Safety instruction
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:-my-2 -mx-2 -mb-2">
                      <table class="w-full">
                        <tr>
                          <th
                            class="text-center border-b border-x-0 lg:border-x border-r border-y lg:border-t-0 border-black"
                          >
                            CHECK
                          </th>
                          <th class="text-center lg:border-t-0 border-y border-b border-black">
                            REMARK
                          </th>
                        </tr>
                        <tr>
                          <td class="text-center w-14 h-14 md:border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.b._10.check"
                            />
                          </td>
                          <td class="text-center w-14 h-14 border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.b._10.remark"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-span-12 lg:grid grid-cols-12 border border-black p-2 rounded-lg my-3 items-center hover:scale-105 transition duration-500 ease-in-out hover:border-2 bg-white hover:bg-slate-50"
                  >
                    <div class="col-span-8 mb-1 p-2">
                      <span class="font-bold">11) </span>Cabin crew members
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:-my-2 -mx-2 -mb-2">
                      <table class="w-full">
                        <tr>
                          <th
                            class="text-center border-b border-x-0 lg:border-x border-r border-y lg:border-t-0 border-black"
                          >
                            CHECK
                          </th>
                          <th class="text-center lg:border-t-0 border-y border-b border-black">
                            REMARK
                          </th>
                        </tr>
                        <tr>
                          <td class="text-center w-14 h-14 md:border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.b._11.check"
                            />
                          </td>
                          <td class="text-center w-14 h-14 border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.b._11.remark"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-span-12 lg:grid grid-cols-12 border border-black p-2 rounded-lg my-3 items-center hover:scale-105 transition duration-500 ease-in-out hover:border-2 bg-white hover:bg-slate-50"
                  >
                    <div class="col-span-8 mb-1 p-2">
                      <span class="font-bold">12) </span>Access to emergency exits
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:-my-2 -mx-2 -mb-2">
                      <table class="w-full">
                        <tr>
                          <th
                            class="text-center border-b border-x-0 lg:border-x border-r border-y lg:border-t-0 border-black"
                          >
                            CHECK
                          </th>
                          <th class="text-center lg:border-t-0 border-y border-b border-black">
                            REMARK
                          </th>
                        </tr>
                        <tr>
                          <td class="text-center w-14 h-14 md:border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.b._12.check"
                            />
                          </td>
                          <td class="text-center w-14 h-14 border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.b._12.remark"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-span-12 lg:grid grid-cols-12 border border-black p-2 rounded-lg my-3 items-center hover:scale-105 transition duration-500 ease-in-out hover:border-2 bg-white hover:bg-slate-50"
                  >
                    <div class="col-span-8 mb-1 p-2">
                      <span class="font-bold">13) </span>Stowage of passenger baggage
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:-my-2 -mx-2 -mb-2">
                      <table class="w-full">
                        <tr>
                          <th
                            class="text-center border-b border-x-0 lg:border-x border-r border-y lg:border-t-0 border-black"
                          >
                            CHECK
                          </th>
                          <th class="text-center lg:border-t-0 border-y border-b border-black">
                            REMARK
                          </th>
                        </tr>
                        <tr>
                          <td class="text-center w-14 h-14 md:border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.b._13.check"
                            />
                          </td>
                          <td class="text-center w-14 h-14 border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.b._13.remark"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-span-12 lg:grid grid-cols-12 border border-black p-2 rounded-lg my-3 items-center hover:scale-105 transition duration-500 ease-in-out hover:border-2 bg-white hover:bg-slate-50"
                  >
                    <div class="col-span-8 mb-1 p-2">
                      <span class="font-bold">14) </span>Seat capacity
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:-my-2 -mx-2 -mb-2">
                      <table class="w-full">
                        <tr>
                          <th
                            class="text-center border-b border-x-0 lg:border-x border-r border-y lg:border-t-0 border-black"
                          >
                            CHECK
                          </th>
                          <th class="text-center lg:border-t-0 border-y border-b border-black">
                            REMARK
                          </th>
                        </tr>
                        <tr>
                          <td class="text-center w-14 h-14 md:border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.b._14.check"
                            />
                          </td>
                          <td class="text-center w-14 h-14 border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.b._14.remark"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-span-12 lg:grid grid-cols-12 border border-black p-2 rounded-lg my-3 items-center hover:scale-105 transition duration-500 ease-in-out hover:border-2 bg-white hover:bg-slate-50"
                  >
                    <div class="col-span-8 mb-1 p-2">
                      <span class="font-bold">15) </span>Security of the flight crew compartment
                      door (if applicable
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:-my-2 -mx-2 -mb-2">
                      <table class="w-full">
                        <tr>
                          <th
                            class="text-center border-b border-x-0 lg:border-x border-r border-y lg:border-t-0 border-black"
                          >
                            CHECK
                          </th>
                          <th class="text-center lg:border-t-0 border-y border-b border-black">
                            REMARK
                          </th>
                        </tr>
                        <tr>
                          <td class="text-center w-14 h-14 md:border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.b._15.check"
                            />
                          </td>
                          <td class="text-center w-14 h-14 border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.b._15.remark"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem class="">
                <Accordion class="bg-white p-2 border-b border-black">
                  C AIRCRAFT CONDITION <span class="float-right"><ChevronsDownUpIcon /></span
                ></Accordion>
                <AccordionPanel class="mt-5 h-[40vh] md:h-[53vh] overflow-y-auto">
                  <div
                    class="col-span-12 lg:grid grid-cols-12 border border-black p-2 rounded-lg my-3 items-center hover:scale-105 transition duration-500 ease-in-out hover:border-2 bg-white hover:bg-slate-50"
                  >
                    <div class="col-span-8 mb-1 p-2">
                      <span class="font-bold">1) </span>General external condition
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:-my-2 -mx-2 -mb-2">
                      <table class="w-full">
                        <tr>
                          <th
                            class="text-center border-b border-x-0 lg:border-x border-r border-y lg:border-t-0 border-black"
                          >
                            CHECK
                          </th>
                          <th class="text-center lg:border-t-0 border-y border-b border-black">
                            REMARK
                          </th>
                        </tr>
                        <tr>
                          <td class="text-center w-14 h-14 md:border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.c._1.check"
                            />
                          </td>
                          <td class="text-center w-14 h-14 border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.c._1.remark"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-span-12 lg:grid grid-cols-12 border border-black p-2 rounded-lg my-3 items-center hover:scale-105 transition duration-500 ease-in-out hover:border-2 bg-white hover:bg-slate-50"
                  >
                    <div class="col-span-8 mb-1 p-2">
                      <span class="font-bold">2) </span>Doors and hatches
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:-my-2 -mx-2 -mb-2">
                      <table class="w-full">
                        <tr>
                          <th
                            class="text-center border-b border-x-0 lg:border-x border-r border-y lg:border-t-0 border-black"
                          >
                            CHECK
                          </th>
                          <th class="text-center lg:border-t-0 border-y border-b border-black">
                            REMARK
                          </th>
                        </tr>
                        <tr>
                          <td class="text-center w-14 h-14 md:border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.c._2.check"
                            />
                          </td>
                          <td class="text-center w-14 h-14 border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.c._2.remark"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-span-12 lg:grid grid-cols-12 border border-black p-2 rounded-lg my-3 items-center hover:scale-105 transition duration-500 ease-in-out hover:border-2 bg-white hover:bg-slate-50"
                  >
                    <div class="col-span-8 mb-1 p-2">
                      <span class="font-bold">3) </span>Wings, Flight controls, and Tail
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:-my-2 -mx-2 -mb-2">
                      <table class="w-full">
                        <tr>
                          <th
                            class="text-center border-b border-x-0 lg:border-x border-r border-y lg:border-t-0 border-black"
                          >
                            CHECK
                          </th>
                          <th class="text-center lg:border-t-0 border-y border-b border-black">
                            REMARK
                          </th>
                        </tr>
                        <tr>
                          <td class="text-center w-14 h-14 md:border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.c._3.check"
                            />
                          </td>
                          <td class="text-center w-14 h-14 border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.c._3.remark"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-span-12 lg:grid grid-cols-12 border border-black p-2 rounded-lg my-3 items-center hover:scale-105 transition duration-500 ease-in-out hover:border-2 bg-white hover:bg-slate-50"
                  >
                    <div class="col-span-8 mb-1 p-2">
                      <span class="font-bold">4) </span>Wheels, brakes and tires
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:-my-2 -mx-2 -mb-2">
                      <table class="w-full">
                        <tr>
                          <th
                            class="text-center border-b border-x-0 lg:border-x border-r border-y lg:border-t-0 border-black"
                          >
                            CHECK
                          </th>
                          <th class="text-center lg:border-t-0 border-y border-b border-black">
                            REMARK
                          </th>
                        </tr>
                        <tr>
                          <td class="text-center w-14 h-14 md:border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.c._4.check"
                            />
                          </td>
                          <td class="text-center w-14 h-14 border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.c._4.remark"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-span-12 lg:grid grid-cols-12 border border-black p-2 rounded-lg my-3 items-center hover:scale-105 transition duration-500 ease-in-out hover:border-2 bg-white hover:bg-slate-50"
                  >
                    <div class="col-span-8 mb-1 p-2">
                      <span class="font-bold">5) </span>Undercarriage, skids/floats
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:-my-2 -mx-2 -mb-2">
                      <table class="w-full">
                        <tr>
                          <th
                            class="text-center border-b border-x-0 lg:border-x border-r border-y lg:border-t-0 border-black"
                          >
                            CHECK
                          </th>
                          <th class="text-center lg:border-t-0 border-y border-b border-black">
                            REMARK
                          </th>
                        </tr>
                        <tr>
                          <td class="text-center w-14 h-14 md:border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.c._5.check"
                            />
                          </td>
                          <td class="text-center w-14 h-14 border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.c._5.remark"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-span-12 lg:grid grid-cols-12 border border-black p-2 rounded-lg my-3 items-center hover:scale-105 transition duration-500 ease-in-out hover:border-2 bg-white hover:bg-slate-50"
                  >
                    <div class="col-span-8 mb-1 p-2">
                      <span class="font-bold">6) </span>Wheel well
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:-my-2 -mx-2 -mb-2">
                      <table class="w-full">
                        <tr>
                          <th
                            class="text-center border-b border-x-0 lg:border-x border-r border-y lg:border-t-0 border-black"
                          >
                            CHECK
                          </th>
                          <th class="text-center lg:border-t-0 border-y border-b border-black">
                            REMARK
                          </th>
                        </tr>
                        <tr>
                          <td class="text-center w-14 h-14 md:border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.c._6.check"
                            />
                          </td>
                          <td class="text-center w-14 h-14 border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.c._6.remark"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-span-12 lg:grid grid-cols-12 border border-black p-2 rounded-lg my-3 items-center hover:scale-105 transition duration-500 ease-in-out hover:border-2 bg-white hover:bg-slate-50"
                  >
                    <div class="col-span-8 mb-1 p-2">
                      <span class="font-bold">7) </span>Intake and exhaust nozzle (powerplant and
                      pylon)
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:-my-2 -mx-2 -mb-2">
                      <table class="w-full">
                        <tr>
                          <th
                            class="text-center border-b border-x-0 lg:border-x border-r border-y lg:border-t-0 border-black"
                          >
                            CHECK
                          </th>
                          <th class="text-center lg:border-t-0 border-y border-b border-black">
                            REMARK
                          </th>
                        </tr>
                        <tr>
                          <td class="text-center w-14 h-14 md:border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.c._7.check"
                            />
                          </td>
                          <td class="text-center w-14 h-14 border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.c._7.remark"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-span-12 lg:grid grid-cols-12 border border-black p-2 rounded-lg my-3 items-center hover:scale-105 transition duration-500 ease-in-out hover:border-2 bg-white hover:bg-slate-50"
                  >
                    <div class="col-span-8 mb-1 p-2">
                      <span class="font-bold">8) </span>Fan blades (if applicable)
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:-my-2 -mx-2 -mb-2">
                      <table class="w-full">
                        <tr>
                          <th
                            class="text-center border-b border-x-0 lg:border-x border-r border-y lg:border-t-0 border-black"
                          >
                            CHECK
                          </th>
                          <th class="text-center lg:border-t-0 border-y border-b border-black">
                            REMARK
                          </th>
                        </tr>
                        <tr>
                          <td class="text-center w-14 h-14 md:border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.c._8.check"
                            />
                          </td>
                          <td class="text-center w-14 h-14 border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.c._8.remark"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-span-12 lg:grid grid-cols-12 border border-black p-2 rounded-lg my-3 items-center hover:scale-105 transition duration-500 ease-in-out hover:border-2 bg-white hover:bg-slate-50"
                  >
                    <div class="col-span-8 mb-1 p-2">
                      <span class="font-bold">9) </span>Propellers or rotors (if applicable)
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:-my-2 -mx-2 -mb-2">
                      <table class="w-full">
                        <tr>
                          <th
                            class="text-center border-b border-x-0 lg:border-x border-r border-y lg:border-t-0 border-black"
                          >
                            CHECK
                          </th>
                          <th class="text-center lg:border-t-0 border-y border-b border-black">
                            REMARK
                          </th>
                        </tr>
                        <tr>
                          <td class="text-center w-14 h-14 md:border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.c._9.check"
                            />
                          </td>
                          <td class="text-center w-14 h-14 border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.c._9.remark"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-span-12 lg:grid grid-cols-12 border border-black p-2 rounded-lg my-3 items-center hover:scale-105 transition duration-500 ease-in-out hover:border-2 bg-white hover:bg-slate-50"
                  >
                    <div class="col-span-8 mb-1 p-2">
                      <span class="font-bold">10) </span>Obvious repairs
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:-my-2 -mx-2 -mb-2">
                      <table class="w-full">
                        <tr>
                          <th
                            class="text-center border-b border-x-0 lg:border-x border-r border-y lg:border-t-0 border-black"
                          >
                            CHECK
                          </th>
                          <th class="text-center lg:border-t-0 border-y border-b border-black">
                            REMARK
                          </th>
                        </tr>
                        <tr>
                          <td class="text-center w-14 h-14 md:border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.c._10.check"
                            />
                          </td>
                          <td class="text-center w-14 h-14 border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.c._10.remark"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-span-12 lg:grid grid-cols-12 border border-black p-2 rounded-lg my-3 items-center hover:scale-105 transition duration-500 ease-in-out hover:border-2 bg-white hover:bg-slate-50"
                  >
                    <div class="col-span-8 mb-1 p-2">
                      <span class="font-bold">11) </span>Obvious unrepaired damage
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:-my-2 -mx-2 -mb-2">
                      <table class="w-full">
                        <tr>
                          <th
                            class="text-center border-b border-x-0 lg:border-x border-r border-y lg:border-t-0 border-black"
                          >
                            CHECK
                          </th>
                          <th class="text-center lg:border-t-0 border-y border-b border-black">
                            REMARK
                          </th>
                        </tr>
                        <tr>
                          <td class="text-center w-14 h-14 md:border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.c._11.check"
                            />
                          </td>
                          <td class="text-center w-14 h-14 border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.c._11.remark"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-span-12 lg:grid grid-cols-12 border border-black p-2 rounded-lg my-3 items-center hover:scale-105 transition duration-500 ease-in-out hover:border-2 bg-white hover:bg-slate-50"
                  >
                    <div class="col-span-8 mb-1 p-2">
                      <span class="font-bold">12) </span>Leakage
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:-my-2 -mx-2 -mb-2">
                      <table class="w-full">
                        <tr>
                          <th
                            class="text-center border-b border-x-0 lg:border-x border-r border-y lg:border-t-0 border-black"
                          >
                            CHECK
                          </th>
                          <th class="text-center lg:border-t-0 border-y border-b border-black">
                            REMARK
                          </th>
                        </tr>
                        <tr>
                          <td class="text-center w-14 h-14 md:border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.c._12.check"
                            />
                          </td>
                          <td class="text-center w-14 h-14 border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.c._12.remark"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem class="">
                <Accordion class="bg-white p-2 border-b border-black">
                  D CARGO <span class="float-right"><ChevronsDownUpIcon /></span
                ></Accordion>
                <AccordionPanel class="mt-5 h-[40vh] md:h-[53vh] overflow-y-auto">
                  <div
                    class="col-span-12 lg:grid grid-cols-12 border border-black p-2 rounded-lg my-3 items-center hover:scale-105 transition duration-500 ease-in-out hover:border-2 bg-white hover:bg-slate-50"
                  >
                    <div class="col-span-8 mb-1 p-2">
                      <span class="font-bold">1) </span>General condition of cargo compartment and
                      containers
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:-my-2 -mx-2 -mb-2">
                      <table class="w-full">
                        <tr>
                          <th
                            class="text-center border-b border-x-0 lg:border-x border-r border-y lg:border-t-0 border-black"
                          >
                            CHECK
                          </th>
                          <th class="text-center lg:border-t-0 border-y border-b border-black">
                            REMARK
                          </th>
                        </tr>
                        <tr>
                          <td class="text-center w-14 h-14 md:border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.d._1.check"
                            />
                          </td>
                          <td class="text-center w-14 h-14 border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.d._1.remark"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-span-12 lg:grid grid-cols-12 border border-black p-2 rounded-lg my-3 items-center hover:scale-105 transition duration-500 ease-in-out hover:border-2 bg-white hover:bg-slate-50"
                  >
                    <div class="col-span-8 mb-1 p-2">
                      <span class="font-bold">2) </span>Dangerous Goods
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:-my-2 -mx-2 -mb-2">
                      <table class="w-full">
                        <tr>
                          <th
                            class="text-center border-b border-x-0 lg:border-x border-r border-y lg:border-t-0 border-black"
                          >
                            CHECK
                          </th>
                          <th class="text-center lg:border-t-0 border-y border-b border-black">
                            REMARK
                          </th>
                        </tr>
                        <tr>
                          <td class="text-center w-14 h-14 md:border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.d._2.check"
                            />
                          </td>
                          <td class="text-center w-14 h-14 border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.d._2.remark"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-span-12 lg:grid grid-cols-12 border border-black p-2 rounded-lg my-3 items-center hover:scale-105 transition duration-500 ease-in-out hover:border-2 bg-white hover:bg-slate-50"
                  >
                    <div class="col-span-8 mb-1 p-2">
                      <span class="font-bold">3) </span>Safety of cargo on board
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:-my-2 -mx-2 -mb-2">
                      <table class="w-full">
                        <tr>
                          <th
                            class="text-center border-b border-x-0 lg:border-x border-r border-y lg:border-t-0 border-black"
                          >
                            CHECK
                          </th>
                          <th class="text-center lg:border-t-0 border-y border-b border-black">
                            REMARK
                          </th>
                        </tr>
                        <tr>
                          <td class="text-center w-14 h-14 md:border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.d._3.check"
                            />
                          </td>
                          <td class="text-center w-14 h-14 border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.d._3.remark"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem class="">
                <Accordion class="bg-white p-2 border-b border-black">
                  E GENERAL <span class="float-right"><ChevronsDownUpIcon /></span
                ></Accordion>
                <AccordionPanel class="mt-5 h-[40vh] md:h-[53vh] overflow-y-auto">
                  <div
                    class="col-span-12 lg:grid grid-cols-12 border border-black p-2 rounded-lg my-3 items-center hover:scale-105 transition duration-500 ease-in-out hover:border-2 bg-white hover:bg-slate-50"
                  >
                    <div class="col-span-8 mb-1 p-2">
                      <span class="font-bold">1) </span>Additional Remark
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:-my-2 -mx-2 -mb-2">
                      <table class="w-full">
                        <tr>
                          <th
                            class="text-center border-b border-x-0 lg:border-x border-r border-y lg:border-t-0 border-black"
                          >
                            CHECK
                          </th>
                          <th class="text-center lg:border-t-0 border-y border-b border-black">
                            REMARK
                          </th>
                        </tr>
                        <tr>
                          <td class="text-center w-14 h-14 md:border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.e._1.check"
                            />
                          </td>
                          <td class="text-center w-14 h-14 border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.e._1.remark"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-span-12 lg:grid grid-cols-12 border border-black p-2 rounded-lg my-3 items-center hover:scale-105 transition duration-500 ease-in-out hover:border-2 bg-white hover:bg-slate-50"
                  >
                    <div class="col-span-8 mb-1 p-2">
                      <span class="font-bold">2) </span>Refueling
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:-my-2 -mx-2 -mb-2">
                      <table class="w-full">
                        <tr>
                          <th
                            class="text-center border-b border-x-0 lg:border-x border-r border-y lg:border-t-0 border-black"
                          >
                            CHECK
                          </th>
                          <th class="text-center lg:border-t-0 border-y border-b border-black">
                            REMARK
                          </th>
                        </tr>
                        <tr>
                          <td class="text-center w-14 h-14 md:border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.e._2.check"
                            />
                          </td>
                          <td class="text-center w-14 h-14 border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.e._2.remark"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-span-12 lg:grid grid-cols-12 border border-black p-2 rounded-lg my-3 items-center hover:scale-105 transition duration-500 ease-in-out hover:border-2 bg-white hover:bg-slate-50"
                  >
                    <div class="col-span-8 mb-1 p-2">
                      <span class="font-bold">3) </span>Language for Communication
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:-my-2 -mx-2 -mb-2">
                      <table class="w-full">
                        <tr>
                          <th
                            class="text-center border-b border-x-0 lg:border-x border-r border-y lg:border-t-0 border-black"
                          >
                            CHECK
                          </th>
                          <th class="text-center lg:border-t-0 border-y border-b border-black">
                            REMARK
                          </th>
                        </tr>
                        <tr>
                          <td class="text-center w-14 h-14 md:border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.e._3.check"
                            />
                          </td>
                          <td class="text-center w-14 h-14 border-l border-black">
                            <input
                              id="type_of_operation_1"
                              type="checkbox"
                              name="type_of_operation_1"
                              class="mx-2 h-9 w-9"
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._17_18.e._3.remark"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </AccordionPanel>
              </AccordionItem>
            </AccordionGroup>
          </div>
        </TabPanel>
        <TabPanel class="">
          <div class="lg:grid grid-cols-12 gap-x-4">
            <div class="col-span-12 lg:col-span-6">
              <div class="py-2 mt-4">
                <div class="flex">
                  <span class="block text-sm font-medium text-gray-700">19) Action Taken</span>
                </div>
                <div
                  class="border border-gray-300 rounded-md mt-1 bg-white hover:scale-105 transition duration-500 ease-in-out hover:border-2"
                >
                  <div
                    class="grid grid-cols-12 space-x-2 border-b border-gray-300 items-center p-3"
                  >
                    <div
                      class="col-span-10 pl-4 justify-center text-gray-700 text-sm flex items-center"
                    >
                      <input
                        type="text"
                        id="form-text"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-white"
                        name="text"
                        disabled
                        value="(3c) Aircraft grounded by DGCA inspector"
                      />
                    </div>
                    <div
                      class="col-span-2 text-sm font-medium text-gray-700 justify-center flex items-center"
                    >
                      <input
                        id="type_of_operation_1"
                        type="checkbox"
                        name="type_of_operation_1"
                        class="h-8 w-8"
                        :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                        v-model="data_utama._19._1"
                      />
                    </div>
                  </div>
                  <div
                    class="grid grid-cols-12 space-x-2 border-b border-gray-300 items-center p-3"
                  >
                    <div
                      class="col-span-10 pl-4 justify-center text-gray-700 text-sm flex items-center"
                    >
                      <input
                        type="text"
                        id="form-text"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-white"
                        name="text"
                        disabled
                        value="(3b) Corrective actions before flight"
                      />
                    </div>
                    <div
                      class="col-span-2 text-sm font-medium text-gray-700 justify-center flex items-center"
                    >
                      <input
                        id="type_of_operation_1"
                        type="checkbox"
                        name="type_of_operation_1"
                        class="h-8 w-8"
                        :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                        v-model="data_utama._19._2"
                      />
                    </div>
                  </div>
                  <div
                    class="grid grid-cols-12 space-x-2 border-b border-gray-300 items-center p-3"
                  >
                    <div
                      class="col-span-10 pl-4 justify-center text-gray-700 text-sm flex items-center"
                    >
                      <input
                        type="text"
                        id="form-text"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-white"
                        name="text"
                        disabled
                        value="(3a) Restrictions on the aircraft"
                      />
                    </div>
                    <div
                      class="col-span-2 text-sm font-medium text-gray-700 justify-center flex items-center"
                    >
                      <input
                        id="type_of_operation_1"
                        type="checkbox"
                        name="type_of_operation_1"
                        class="h-8 w-8"
                        :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                        v-model="data_utama._19._3"
                      />
                    </div>
                  </div>
                  <div
                    class="grid grid-cols-12 space-x-2 border-b border-gray-300 items-center p-3"
                  >
                    <div
                      class="col-span-10 pl-4 justify-center text-gray-700 text-sm flex items-center"
                    >
                      <input
                        type="text"
                        id="form-text"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-white"
                        name="text"
                        disabled
                        value="(2) Information to the operator and authority"
                      />
                    </div>
                    <div
                      class="col-span-2 text-sm font-medium text-gray-700 justify-center flex items-center"
                    >
                      <input
                        id="type_of_operation_1"
                        type="checkbox"
                        name="type_of_operation_1"
                        class="h-8 w-8"
                        :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                        v-model="data_utama._19._4"
                      />
                    </div>
                  </div>
                  <div
                    class="grid grid-cols-12 space-x-2 border-b border-gray-300 items-center p-3"
                  >
                    <div
                      class="col-span-10 pl-4 justify-center text-gray-700 text-sm flex items-center"
                    >
                      <input
                        type="text"
                        id="form-text"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-white"
                        name="text"
                        disabled
                        value="(1) Information to the PIC"
                      />
                    </div>
                    <div
                      class="col-span-2 text-sm font-medium text-gray-700 justify-center flex items-center"
                    >
                      <input
                        id="type_of_operation_1"
                        type="checkbox"
                        name="type_of_operation_1"
                        class="h-8 w-8"
                        :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                        v-model="data_utama._19._5"
                      />
                    </div>
                  </div>
                  <div
                    class="grid grid-cols-12 space-x-2 border-b border-gray-300 items-center p-3"
                  >
                    <div
                      class="col-span-10 pl-4 justify-center text-gray-700 text-sm flex items-center"
                    >
                      <input
                        type="text"
                        id="form-text"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-white"
                        name="text"
                        disabled
                        value="(0) No remarks"
                      />
                    </div>
                    <div
                      class="col-span-2 text-sm font-medium text-gray-700 justify-center flex items-center"
                    >
                      <input
                        id="type_of_operation_1"
                        type="checkbox"
                        name="type_of_operation_1"
                        class="h-8 w-8"
                        :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                        v-model="data_utama._19._6"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-12 lg:col-span-6">
              <div class="py-2 mt-4">
                <div class="flex">
                  <span class="block text-sm font-medium text-gray-700">
                    20) Item <span class="mr-3"></span> 21) Cat
                    <span class="mr-3"></span> 22)Remark(s)</span
                  >
                </div>
                <div
                  class="rounded-md mt-1 bg-white hover:scale-105 transition duration-500 ease-in-out hover:border-2"
                >
                  <div class="relative overflow-auto shadow-md sm:rounded-lg h-96">
                    <table class="w-full text-sm text-left text-gray-500">
                      <thead
                        class="text-xs text-gray-700 uppercase border-b border-black sticky top-0"
                      >
                        <tr>
                          <th scope="col" class="px-6 py-3 bg-gray-50">20)Item</th>
                          <th scope="col" class="px-6 py-3 bg-white">21)Cat</th>
                          <th scope="col" class="px-6 py-3 bg-gray-50">22)Remark(s)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="border-b border-gray-200">
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
                          >
                            <input
                              type="text"
                              id="form-text"
                              class="shadow w-24 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight bg-white"
                              name="text"
                              required=""
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._20_21_22._1.item"
                            />
                          </th>
                          <td class="px-6 py-4">
                            <input
                              type="text"
                              id="form-text"
                              class="shadow w-24 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight bg-white"
                              name="text"
                              required=""
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._20_21_22._1.cat"
                            />
                          </td>
                          <td class="px-6 py-4 bg-gray-50">
                            <input
                              type="text"
                              id="form-text"
                              class="shadow w-48 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight bg-white"
                              name="text"
                              required=""
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._20_21_22._1.remark"
                            />
                          </td>
                        </tr>
                        <tr class="border-b border-gray-200">
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
                          >
                            <input
                              type="text"
                              id="form-text"
                              class="shadow w-24 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight bg-white"
                              name="text"
                              required=""
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._20_21_22._2.item"
                            />
                          </th>
                          <td class="px-6 py-4">
                            <input
                              type="text"
                              id="form-text"
                              class="shadow w-24 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight bg-white"
                              name="text"
                              required=""
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._20_21_22._2.cat"
                            />
                          </td>
                          <td class="px-6 py-4 bg-gray-50">
                            <input
                              type="text"
                              id="form-text"
                              class="shadow w-48 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight bg-white"
                              name="text"
                              required=""
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._20_21_22._2.remark"
                            />
                          </td>
                        </tr>
                        <tr class="border-b border-gray-200">
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
                          >
                            <input
                              type="text"
                              id="form-text"
                              class="shadow w-24 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight bg-white"
                              name="text"
                              required=""
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._20_21_22._3.item"
                            />
                          </th>
                          <td class="px-6 py-4">
                            <input
                              type="text"
                              id="form-text"
                              class="shadow w-24 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight bg-white"
                              name="text"
                              required=""
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._20_21_22._3.cat"
                            />
                          </td>
                          <td class="px-6 py-4 bg-gray-50">
                            <input
                              type="text"
                              id="form-text"
                              class="shadow w-48 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight bg-white"
                              name="text"
                              required=""
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._20_21_22._3.remark"
                            />
                          </td>
                        </tr>
                        <tr class="border-b border-gray-200">
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
                          >
                            <input
                              type="text"
                              id="form-text"
                              class="shadow w-24 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight bg-white"
                              name="text"
                              required=""
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._20_21_22._4.item"
                            />
                          </th>
                          <td class="px-6 py-4">
                            <input
                              type="text"
                              id="form-text"
                              class="shadow w-24 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight bg-white"
                              name="text"
                              required=""
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._20_21_22._4.cat"
                            />
                          </td>
                          <td class="px-6 py-4 bg-gray-50">
                            <input
                              type="text"
                              id="form-text"
                              class="shadow w-48 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight bg-white"
                              name="text"
                              required=""
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._20_21_22._4.remark"
                            />
                          </td>
                        </tr>
                        <tr class="border-b border-gray-200">
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
                          >
                            <input
                              type="text"
                              id="form-text"
                              class="shadow w-24 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight bg-white"
                              name="text"
                              required=""
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._20_21_22._5.item"
                            />
                          </th>
                          <td class="px-6 py-4">
                            <input
                              type="text"
                              id="form-text"
                              class="shadow w-24 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight bg-white"
                              name="text"
                              required=""
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._20_21_22._5.cat"
                            />
                          </td>
                          <td class="px-6 py-4 bg-gray-50">
                            <input
                              type="text"
                              id="form-text"
                              class="shadow w-48 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight bg-white"
                              name="text"
                              required=""
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._20_21_22._5.remark"
                            />
                          </td>
                        </tr>
                        <tr class="border-b border-gray-200">
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
                          >
                            <input
                              type="text"
                              id="form-text"
                              class="shadow w-24 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight bg-white"
                              name="text"
                              required=""
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._20_21_22._6.item"
                            />
                          </th>
                          <td class="px-6 py-4">
                            <input
                              type="text"
                              id="form-text"
                              class="shadow w-24 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight bg-white"
                              name="text"
                              required=""
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._20_21_22._6.cat"
                            />
                          </td>
                          <td class="px-6 py-4 bg-gray-50">
                            <input
                              type="text"
                              id="form-text"
                              class="shadow w-48 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight bg-white"
                              name="text"
                              required=""
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._20_21_22._6.remark"
                            />
                          </td>
                        </tr>
                        <tr class="border-b border-gray-200">
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
                          >
                            <input
                              type="text"
                              id="form-text"
                              class="shadow w-24 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight bg-white"
                              name="text"
                              required=""
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._20_21_22._7.item"
                            />
                          </th>
                          <td class="px-6 py-4">
                            <input
                              type="text"
                              id="form-text"
                              class="shadow w-24 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight bg-white"
                              name="text"
                              required=""
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._20_21_22._7.cat"
                            />
                          </td>
                          <td class="px-6 py-4 bg-gray-50">
                            <input
                              type="text"
                              id="form-text"
                              class="shadow w-48 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight bg-white"
                              name="text"
                              required=""
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._20_21_22._7.remark"
                            />
                          </td>
                        </tr>
                        <tr class="border-b border-gray-200">
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
                          >
                            <input
                              type="text"
                              id="form-text"
                              class="shadow w-24 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight bg-white"
                              name="text"
                              required=""
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._20_21_22._8.item"
                            />
                          </th>
                          <td class="px-6 py-4">
                            <input
                              type="text"
                              id="form-text"
                              class="shadow w-24 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight bg-white"
                              name="text"
                              required=""
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._20_21_22._8.cat"
                            />
                          </td>
                          <td class="px-6 py-4 bg-gray-50">
                            <input
                              type="text"
                              id="form-text"
                              class="shadow w-48 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight bg-white"
                              name="text"
                              required=""
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._20_21_22._8.remark"
                            />
                          </td>
                        </tr>
                        <tr class="border-b border-gray-200">
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
                          >
                            <input
                              type="text"
                              id="form-text"
                              class="shadow w-24 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight bg-white"
                              name="text"
                              required=""
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._20_21_22._9.item"
                            />
                          </th>
                          <td class="px-6 py-4">
                            <input
                              type="text"
                              id="form-text"
                              class="shadow w-24 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight bg-white"
                              name="text"
                              required=""
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._20_21_22._9.cat"
                            />
                          </td>
                          <td class="px-6 py-4 bg-gray-50">
                            <input
                              type="text"
                              id="form-text"
                              class="shadow w-48 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight bg-white"
                              name="text"
                              required=""
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._20_21_22._9.remark"
                            />
                          </td>
                        </tr>
                        <tr class="border-b border-gray-200">
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
                          >
                            <input
                              type="text"
                              id="form-text"
                              class="shadow w-24 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight bg-white"
                              name="text"
                              required=""
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._20_21_22._10.item"
                            />
                          </th>
                          <td class="px-6 py-4">
                            <input
                              type="text"
                              id="form-text"
                              class="shadow w-24 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight bg-white"
                              name="text"
                              required=""
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._20_21_22._10.cat"
                            />
                          </td>
                          <td class="px-6 py-4 bg-gray-50">
                            <input
                              type="text"
                              id="form-text"
                              class="shadow w-48 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight bg-white"
                              name="text"
                              required=""
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._20_21_22._10.remark"
                            />
                          </td>
                        </tr>

                        <tr class="border-b border-gray-200">
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
                          >
                            <input
                              type="text"
                              id="form-text"
                              class="shadow w-24 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight bg-white"
                              name="text"
                              required=""
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._20_21_22._11.item"
                            />
                          </th>
                          <td class="px-6 py-4">
                            <input
                              type="text"
                              id="form-text"
                              class="shadow w-24 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight bg-white"
                              name="text"
                              required=""
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._20_21_22._11.cat"
                            />
                          </td>
                          <td class="px-6 py-4 bg-gray-50">
                            <input
                              type="text"
                              id="form-text"
                              class="shadow w-48 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight bg-white"
                              name="text"
                              required=""
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._20_21_22._11.remark"
                            />
                          </td>
                        </tr>
                        <tr class="border-b border-gray-200">
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
                          >
                            <input
                              type="text"
                              id="form-text"
                              class="shadow w-24 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight bg-white"
                              name="text"
                              required=""
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._20_21_22._12.item"
                            />
                          </th>
                          <td class="px-6 py-4">
                            <input
                              type="text"
                              id="form-text"
                              class="shadow w-24 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight bg-white"
                              name="text"
                              required=""
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._20_21_22._12.cat"
                            />
                          </td>
                          <td class="px-6 py-4 bg-gray-50">
                            <input
                              type="text"
                              id="form-text"
                              class="shadow w-48 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight bg-white"
                              name="text"
                              required=""
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._20_21_22._12.remark"
                            />
                          </td>
                        </tr>
                        <tr class="border-b border-gray-200">
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
                          >
                            <input
                              type="text"
                              id="form-text"
                              class="shadow w-24 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight bg-white"
                              name="text"
                              required=""
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._20_21_22._13.item"
                            />
                          </th>
                          <td class="px-6 py-4">
                            <input
                              type="text"
                              id="form-text"
                              class="shadow w-24 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight bg-white"
                              name="text"
                              required=""
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._20_21_22._13.cat"
                            />
                          </td>
                          <td class="px-6 py-4 bg-gray-50">
                            <input
                              type="text"
                              id="form-text"
                              class="shadow w-48 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight bg-white"
                              name="text"
                              required=""
                              :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                              v-model="data_utama._20_21_22._13.remark"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-12 lg:col-span-6">
              <div class="py-2 mt-4">
                <div class="flex">
                  <span class="block text-sm font-medium text-gray-700"
                    >23) Inspector(s) name and signature</span
                  >
                </div>
                <div
                  class="border border-gray-300 rounded-md mt-1 bg-white hover:scale-105 transition duration-500 ease-in-out hover:border-2"
                >
                  <div
                    class="grid grid-cols-12 space-x-2 border-b border-gray-300 items-center p-3 pb-8"
                  >
                    <label class="col-span-12 mb-2" for="form-text">Name & Signature 1</label>
                    <div class="col text-gray-700 justify-start flex items-center">
                      <input
                        id="type_of_operation_1"
                        type="checkbox"
                        name="type_of_operation_1"
                        class="h-8 w-8"
                        disabled
                        v-model="data_utama._23._1.signature"
                      />
                    </div>
                    <div class="col-span-9 justify-center text-gray-700 text-sm flex items-center">
                      <input
                        type="text"
                        id="form-text"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-white"
                        name="text"
                        required=""
                        :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                        v-model="data_utama._23._1.name"
                      />
                    </div>
                    <div
                      class="col-span-2 text-sm font-medium text-gray-700 justify-center flex items-center"
                    >
                      <button
                        @click="signOn(data_utama._23._1)"
                        :disabled="data_utama._23._1.name == ''"
                        type="button"
                        class="bg-primary text-white p-2 rounded-md disabled:bg-secondary"
                        :class="
                          Object.getOwnPropertyNames(route.query).length == 0 ? ' hidden' : ''
                        "
                      >
                        Sign
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  class="border border-gray-300 rounded-md mt-1 bg-white hover:scale-105 transition duration-500 ease-in-out hover:border-2"
                >
                  <div
                    class="grid grid-cols-12 space-x-2 border-b border-gray-300 items-center p-3 pb-8"
                  >
                    <label class="col-span-12 mb-2" for="form-text">Name & Signature 2</label>
                    <div class="col text-gray-700 justify-start flex items-center">
                      <input
                        id="type_of_operation_1"
                        type="checkbox"
                        name="type_of_operation_1"
                        class="h-8 w-8"
                        disabled
                        v-model="data_utama._23._2.signature"
                      />
                    </div>
                    <div class="col-span-9 justify-center text-gray-700 text-sm flex items-center">
                      <input
                        type="text"
                        id="form-text"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-white"
                        name="text"
                        required=""
                        :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                        v-model="data_utama._23._2.name"
                      />
                    </div>
                    <div
                      class="col-span-2 text-sm font-medium text-gray-700 justify-center flex items-center"
                    >
                      <button
                        @click="signOn(data_utama._23._2)"
                        :disabled="data_utama._23._2.name == ''"
                        type="button"
                        class="bg-primary text-white p-2 rounded-md disabled:bg-secondary"
                        :class="
                          Object.getOwnPropertyNames(route.query).length == 0 ? ' hidden' : ''
                        "
                      >
                        Sign
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  class="border border-gray-300 rounded-md mt-1 bg-white hover:scale-105 transition duration-500 ease-in-out hover:border-2"
                >
                  <div
                    class="grid grid-cols-12 space-x-2 border-b border-gray-300 items-center p-3 pb-8"
                  >
                    <label class="col-span-12 mb-2" for="form-text">Name & Signature 3</label>
                    <div class="col text-gray-700 justify-start flex items-center">
                      <input
                        id="type_of_operation_1"
                        type="checkbox"
                        name="type_of_operation_1"
                        class="h-8 w-8"
                        disabled
                        v-model="data_utama._23._3.signature"
                      />
                    </div>
                    <div class="col-span-9 justify-center text-gray-700 text-sm flex items-center">
                      <input
                        type="text"
                        id="form-text"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-white"
                        name="text"
                        required=""
                        :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                        v-model="data_utama._23._3.name"
                      />
                    </div>
                    <div
                      class="col-span-2 text-sm font-medium text-gray-700 justify-center flex items-center"
                    >
                      <button
                        @click="signOn(data_utama._23._3)"
                        :disabled="data_utama._23._3.name == ''"
                        type="button"
                        class="bg-primary text-white p-2 rounded-md disabled:bg-secondary"
                        :class="
                          Object.getOwnPropertyNames(route.query).length == 0 ? ' hidden' : ''
                        "
                      >
                        Sign
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  class="border border-gray-300 rounded-md mt-1 bg-white hover:scale-105 transition duration-500 ease-in-out hover:border-2"
                >
                  <div
                    class="grid grid-cols-12 space-x-2 border-b border-gray-300 items-center p-3 pb-8"
                  >
                    <label class="col-span-12 mb-2" for="form-text">Name & Signature 4</label>
                    <div class="col text-gray-700 justify-start flex items-center">
                      <input
                        id="type_of_operation_1"
                        type="checkbox"
                        name="type_of_operation_1"
                        class="h-8 w-8"
                        disabled
                        v-model="data_utama._23._4.signature"
                      />
                    </div>
                    <div class="col-span-9 justify-center text-gray-700 text-sm flex items-center">
                      <input
                        type="text"
                        id="form-text"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-white"
                        name="text"
                        required=""
                        :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                        v-model="data_utama._23._4.name"
                      />
                    </div>
                    <div
                      class="col-span-2 text-sm font-medium text-gray-700 justify-center flex items-center"
                    >
                      <button
                        @click="signOn(data_utama._23._4)"
                        :disabled="data_utama._23._4.name == ''"
                        type="button"
                        class="bg-primary text-white p-2 rounded-md disabled:bg-secondary"
                        :class="
                          Object.getOwnPropertyNames(route.query).length == 0 ? ' hidden' : ''
                        "
                      >
                        Sign
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  class="border border-gray-300 rounded-md mt-1 bg-white hover:scale-105 transition duration-500 ease-in-out hover:border-2"
                >
                  <div
                    class="grid grid-cols-12 space-x-2 border-b border-gray-300 items-center p-3 pb-8"
                  >
                    <label class="col-span-12 mb-2" for="form-text">Name & Signature 5</label>
                    <div class="col text-gray-700 justify-start flex items-center">
                      <input
                        id="type_of_operation_5"
                        type="checkbox"
                        name="type_of_operation_1"
                        class="h-8 w-8"
                        disabled
                        v-model="data_utama._23._5.signature"
                      />
                    </div>
                    <div class="col-span-9 justify-center text-gray-700 text-sm flex items-center">
                      <input
                        type="text"
                        id="form-text"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-white"
                        name="text"
                        required=""
                        :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                        v-model="data_utama._23._5.name"
                      />
                    </div>
                    <div
                      class="col-span-2 text-sm font-medium text-gray-700 justify-center flex items-center"
                    >
                      <button
                        @click="signOn(data_utama._23._5)"
                        :disabled="data_utama._23._5.name == ''"
                        type="button"
                        class="bg-primary text-white p-2 rounded-md disabled:bg-secondary"
                        :class="
                          Object.getOwnPropertyNames(route.query).length == 0 ? ' hidden' : ''
                        "
                      >
                        Sign
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-12 lg:col-span-6 py-2 mt-4">
              <label for="form-crew-comment" class="block text-sm font-medium text-gray-700"
                >24) Crew comments (if any)</label
              ><textarea
                id="form-crew-comments"
                class="t-form"
                name="crew_comment"
                :disabled="Object.getOwnPropertyNames(route.query).length == 0"
                rows="11"
                v-model="data_utama._24"
              ></textarea>
            </div>
          </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
  <div
    v-show="isLoading"
    wire:loading
    class="fixed top-0 left-0 right-0 bottom-0 w-full h-full z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center"
  >
    <Loader2Icon class="motion-safe:animate-spin stroke-[5px] text-white h-12 w-12 mb-4" />
    <h2 class="text-center text-white text-xl font-semibold">Loading...</h2>
    <p class="w-full text-center text-white">
      This may take a few seconds, please don't close this page.
    </p>
  </div>
  <!-- BEGIN: Sign Confirmation Modal -->
  <Modal :show="signConfirmationModal" @hidden="signConfirmationModal = false">
    <ModalBody class="p-0">
      <div class="p-5 text-center">
        <FileEditIcon class="w-16 h-16 text-primary mx-auto mt-3" />
        <div class="text-lg mt-5">H Are you sure you want to sign this document?</div>
      </div>
      <div class="px-5 pb-8 text-center">
        <button
          type="button"
          @click="signConfirmationModal = false"
          class="border-2 border-secondary p-2 rounded-md w-24 mr-5"
        >
          Cancel
        </button>
        <button
          type="button"
          class="border bg-primary text-white p-2 rounded-md border-primary w-24"
          @click=";(idSign.signature = true), (signConfirmationModal = false)"
        >
          Yes
        </button>
      </div>
    </ModalBody>
  </Modal>
  <!-- END: Sign Confirmation Modal -->
</template>
<style scoped></style>
