export default defineEventHandler(async (event) => {
    const { id } = event.context.params
    const url = useRuntimeConfig().public.CAR_API_URL
    const body = await readBody(event)
    const token = getHeader(event,'Authorization')
    const res = await $fetch(url + id, {
        method: "PUT",
        body: body,
        headers: {
            Authorization: token
        }
    })
    return res
}
)