import { useCarStore } from '../stores/CarStore'

export default async (url, token) => {
    const store = useCarStore()
    const { data, error} = await useFetch(url,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    if(error.value){
        const {statusCode , statusMessage} = error.value
        alert(`ERROR: ${statusCode}, ${statusMessage}`)
    }
    return store.cars = data.value.data
}