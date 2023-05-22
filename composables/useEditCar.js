import { useCarStore } from '../stores/CarStore'

export default async (car) => {
    const store = useCarStore()
    const {data , error} =await useFetch(`/api/edit/${store.carID}`, {
        method: 'PUT',
        body: car,
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
    if(error.value){
        const {statusCode , statusMessage} = error.value
        alert(`ERROR: ${statusCode}, ${statusMessage}`)
    }
    useFetchData(store.url)
}