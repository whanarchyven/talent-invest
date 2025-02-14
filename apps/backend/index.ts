import { Elysia, t } from 'elysia'

const app = new Elysia()
    .get('/', () => 'Hi Elysia Server')
    .get('/id/:id', ({ params: { id } }) => id)
    .post('/mirror', ({ body }) => body, {
        body: t.Object({
            id: t.Number(),
            name: t.String()
        })
    })
    .listen(3000)

export type App = typeof app 