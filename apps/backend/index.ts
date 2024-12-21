import { Elysia } from 'elysia';

const app = new Elysia();

app.get('/', () => 'Hello from Bun + Elysia!');

app.listen(3001, () => {
    console.log('🚀 Backend running at http://localhost:3001');
});
