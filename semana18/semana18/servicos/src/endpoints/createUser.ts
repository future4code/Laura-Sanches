import { Request, Response } from "express";
import insertUser from "../data/insertUser";
import { generate } from "../service/idGenerator";
import { generateToken } from "../service/authenticator";
import { hash } from "../service/hashManager";
import { USER_ROLES } from "../types/user";

export default async function createUser(
   req: Request,
   res: Response
) {
   try {

      if (
         !req.body.name ||
         !req.body.nickname ||
         !req.body.email ||
         !req.body.password ||
         !req.body.role
      ) {
         throw new Error('Preencha os campos "name","nickname", "password", "role" e "email"')
      }

      if (
         req.body.role !== USER_ROLES.ADMIN &&
         req.body.role !== USER_ROLES.NORMAL
      ) {
         throw new Error(`"role" deve ser "NORMAL" ou "ADMIN"`)
      }

      const id: string = generate();

      const cypherPassword: string = hash(req.body.password)

      await insertUser(
         id,
         req.body.name,
         req.body.nickname,
         cypherPassword,
         req.body.email,
         req.body.role
      );

      const token = generateToken({
         id,
         role: req.body.role
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