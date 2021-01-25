import express from 'express'
import knex from 'knex'
import cors from 'cors'
import dotenv from 'dotenv'
import createUser from './endpoints/createUser'
import getUserById from './endpoints/getUserById'
import editUser from './endpoints/editUser'
import createTask from './endpoints/createTask'
import getTaskById from './endpoints/getTaskById'
import {generate} from "./service/idGenerator";
import { login } from './endpoints/login'

dotenv.config()

export const connection = knex({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: 3306
    }
})


const app = express()
app.use(express.json())
app.use(cors())

app.post('/user/signup', createUser)
app.post('/user/login', login)
app.get('/user/:id', getUserById)
app.post('/user/edit', editUser)

app.put('/task', createTask)
app.get('/task/:id', getTaskById)

app.listen(3000, ()=>{
    console.log('Servidor rodando na porta 3000')
})