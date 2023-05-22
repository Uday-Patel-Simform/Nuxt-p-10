import { defineStore } from "pinia"

export const useUserStore = defineStore("UserStore", {
  state: () => ({
    isLoggedIn: null,
    url: useRuntimeConfig().public.USER_API_URL,
    urlLogin: useRuntimeConfig().public.USER_API_URL_LOGIN
  }),
  getters:{
    getIsLoggedIn(state){
      if(process.client){
        state.isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIN'))
      }
    },
  },
  actions: {
    registerUser(user) {
      if (useAddData(this.url, user)) {
        navigateTo('/Login')
      }
    },
    async loginUser(user) {
      const res = await useFetch('/api/login', {
        method: 'POST',
        body: user
      }).then(res => {
        const { error , data } = res
        if(error.value){
          const {statusCode , statusMessage} = error.value
          alert(`ERROR: ${statusCode}, ${statusMessage}`)
        } else {
          navigateTo('/')
          const {token} = data.value
          window.localStorage.setItem("token",token)
          window.localStorage.setItem("isLoggedIN", true)
          this.isLoggedIn = true
        }
      })
    },
    logOut() {
      this.isLoggedIn = null
      window.localStorage.removeItem("token")
      window.localStorage.removeItem("isLoggedIN")
      navigateTo('/Login')
    },
  },
  persist: true,
});
