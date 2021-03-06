import { Request, Response } from "express";
import insertUser from "../data/insertUser";
import { generate } from "../service/idGenerator";
import { generateToken } from "../service/authenticator";
import { hash } from "../service/hashManeger";
export default async function createUser(
   req: Request,
   res: Response
) {
   try {

      const password = req.body.password
      if(password.length < 6){
        throw new Error("Senha muito pequena, deve contar no mínimo 6 caracteres!!!");
      };

      if (
         !req.body.name ||
         !req.body.email ||
         !req.body.password
      ) {
         throw new Error('Preencha os campos "name", "password" e "email"')
      }
      const id: string = generate();
      const cypherPassword: string = hash(req.body.password)
        await insertUser(
            id,
            req.body.name,
            req.body.email,
            cypherPassword,
        );
      const token = generateToken({
         id
      });
      res
         .status(200)
         .send({ token });
   } catch (error) {
      res.status(400).send({
         message: error.message || error.sqlMessage
      })
   }
}

