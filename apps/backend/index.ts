import { Elysia, t } from 'elysia'
import { MongoClient } from 'mongodb';
import { Talent } from './models/talent';
import cors from '@elysiajs/cors'
import { saveFile } from './utils/fileHandler';
import {staticPlugin} from '@elysiajs/static';
import { Investor } from './models/investor';





const client = new MongoClient(process.env.MONGO_DB_CONNECTION_STRING ?? '');
console.log('Try to connect database')
await client.connect();
console.log('Подключено к MongoDB');
const dbName = 'talents-max';
const db = client.db(dbName);


const app = new Elysia()
    .use(cors())
    .use(staticPlugin({
        prefix: '/public',
        assets: 'public'
    }))
    .get('/', () => 'Hi Elysia Server')
    .get('/error', () => {
        throw new Error('Test Elysia Error')
    })
    .get('/talents', async ({query}): Promise<Talent[]> => {
        const talents = await db.collection('talents').find({}).limit(10).toArray() as unknown as Talent[];
        return talents;
    },{
        query: t.Object({
            page: t.Optional(t.Number()),
            limit: t.Optional(t.Number())
        })
    })
    .post('/talents', async ({ body }) => {
        const avatarPath = await saveFile(body.avatar, 'images');

        const talent: Omit<Talent, '_id'> = {
            name: body.name,
            country: body.country,
            job: body.job,
            education: body.education,
            email: body.email,
            phone: body.phone,
            age: Number(body.age),
            avatar: avatarPath,
            rating: 0,
            investments: 0
        };
        const result = await db.collection('talents').insertOne(talent);
        return result;
    },{
        body: t.Object({
            name: t.String(),
            country: t.String(),
            job: t.String(),
            education: t.String(),
            email: t.String(),
            phone: t.String(),
            age: t.String(),
            avatar:t.File()
        })
    })
    .get('/investors', async ({ query }): Promise<Investor[]> => {
        const investors = await db.collection('investors').find({}).limit(10).toArray() as unknown as Investor[];
        return investors;
    }, {
        query: t.Object({
            page: t.Optional(t.Number()),
            limit: t.Optional(t.Number())
        })
    })
    .post('/investors', async ({ body }) => {
        const avatarPath = await saveFile(body.avatar, 'images');

        const investor: Omit<Investor, '_id'> = {
            name: body.name,
            email: body.email,
            phone: body.phone,
            avatar: avatarPath,
            interests: body.interests,
            capital: Number(body.capital)
        };
        const result = await db.collection('investors').insertOne(investor);
        return result;
    }, {
        body: t.Object({
            name: t.String(),
            email: t.String(),
            phone: t.String(),
            avatar: t.File(),
            interests: t.String(),
            capital: t.String()
        })
    })
    .listen(3000)

export type App = typeof app 