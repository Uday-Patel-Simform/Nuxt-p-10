import { useUserStore } from "@/stores/UserStore";
export default defineNuxtRouteMiddleware((to, from) => {
    const store = useUserStore()
    const user = store.isLoggedIn
    if (to.fullPath === '/Login' || to.fullPath === '/Register') {
        if (user) {
            return navigateTo('/')
        }
    } else {
        if (!user) {
            return navigateTo('/Login')
        }
    }
})