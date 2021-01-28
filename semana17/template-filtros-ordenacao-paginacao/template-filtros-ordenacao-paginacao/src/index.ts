import express, { Express, Request, Response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { recipe } from "./types/recipe";

dotenv.config();

export const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
   }
})

const app: Express = express();
app.use(express.json());
app.use(cors())

app.get("/recipes/all", async function (
   req: Request,
   res: Response
): Promise<void> {
   try {
      const recipes: recipe[] = await connection.raw(`
         SELECT title, name AS "author", description
         FROM recipes_aula48
         JOIN users_aula48 
         ON user_id = users_aula48.id;
      `)

      if(!recipes.length){
         res.statusCode = 404
         throw new Error("No recipes found")
      }

      res.status(200).send(recipes)
      
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
});

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});