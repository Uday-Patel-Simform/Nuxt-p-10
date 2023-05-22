import { useCarStore } from '../stores/CarStore'

export default async (url,data) => {
    const store = useCarStore()
    await useFetch(url,{
        method: 'POST',
        body: data,
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }).then(res => {
        const error = res.error.value
        if (error) {
            const {statusCode , statusMessage} = error
            alert(`ERROR: ${statusCode}, ${statusMessage}`)
        } else {
            useFetchData(store.url)
        }
    })
}