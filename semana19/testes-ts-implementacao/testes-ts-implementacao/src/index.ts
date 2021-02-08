import knex from 'knex'
import { config } from 'dotenv'

config()

export const isEven = (
   integer: number
): boolean => integer % 2 === 0

export const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
   },
});