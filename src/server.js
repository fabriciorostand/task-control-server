import { fastify } from 'fastify'
import { fastifyCors } from '@fastify/cors'

const app = fastify()

app.register(fastifyCors, {
    origin: 'http://localhost:5173',
})

app.listen({ port: 3333 }).then(() => {
    console.log('HTTP server is running!')
})