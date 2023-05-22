import { defineStore } from "pinia";

export const useCarStore = defineStore("CarStore", {
  state: () => ({
    cars: [],
    isVisiblePopup: false,
    formBtnTxt: null,
    carID: "",
    carObj:{},
    url: useRuntimeConfig().public.CAR_API_URL,
  })
})
