import { Request, Response } from "express";
import insertTask from "../data/insertTask";
import { generate } from "../service/idGenerator";

export default async function createTask(
   req: Request,
   res: Response
) {
   try {
      if (
         !req.body.title ||
         !req.body.description ||
         !req.body.deadline ||
         !req.body.authorId
      ) {
         throw new Error('"title", "description", "deadline" e "authorId" são obrigatórios')
      }

      const id: string = generate()

      await insertTask(
         id,
         req.body.title,
         req.body.description,
         req.body.deadline,
         req.body.authorId,
      )

      res.status(400).send({
         message: "Tarefa criada com sucesso!",
         id
      })

   } catch (error) {
      let message = error.sqlMessage || error.message

      if (message.includes("date")) {
         message = "'deadline' deve ser uma data válida, no formato aaaa-mm-dd"
      }

      res.status(400).send({ message })
   }
}