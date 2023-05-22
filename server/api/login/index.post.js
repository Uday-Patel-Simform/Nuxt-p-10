import jwt from 'jsonwebtoken';

export default defineEventHandler(async (event) => {
    const url = useRuntimeConfig().public.USER_API_URL
    const { email, password } = await readBody(event)
    const { data, error } = await $fetch(url)
    if (error) {
        const { statusCode, statusMessage } = error.value
        throw createError({
            statusCode: statusCode,
            statusMessage: statusMessage,
        })
    }
    else {
        let user = data.find((u) => u.email === email && u.password === password)
        if (user) {
            const token = jwt.sign(user, password)
            return { token: token }
        } else {
            throw createError({
                statusCode: 444,
                statusMessage: 'Unauthorized',
            })
        }
    }
}
)