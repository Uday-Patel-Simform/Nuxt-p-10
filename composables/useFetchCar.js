import { useCarStore } from '../stores/CarStore'

export default async (token) => {
    const store = useCarStore()
    const route = useRoute()
    const {data , error} = await useFetch(store.url+route.params.id,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    if(error.value){
            throw createError({
                statusCode: 404,
                statusMessage: `Car with id: ${route.params.id} not found!!`,
            })
    }
    return data
}