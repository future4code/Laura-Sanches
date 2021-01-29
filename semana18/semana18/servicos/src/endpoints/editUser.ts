import { Request, Response } from "express";
import updateUser from "../data/updateUser";
import { AuthenticationData, getTokenData } from "../service/authenticator";
import { USER_ROLES } from "../types/user";

export default async function editUser(
   req: Request,
   res: Response
) {
   try {

      const { authorization } = req.headers

      const tokenData: AuthenticationData = getTokenData(authorization!)
      
      debugger

      if(tokenData.role !== USER_ROLES.ADMIN){
         res.statusCode = 401
         throw new Error("You have no power here")
      }

      if (
         req.body.name === '' ||
         req.body.nickname === '' ||
         req.body.email === ''
      ) {
         throw new Error("Nenhum dos campos pode estar em branco")
      }

      if (!req.body.name && !req.body.nickname && !req.body.email) {
         throw new Error("Escolha ao menos um valor para alterar")
      }

      await updateUser(
         tokenData.id,
         req.body.name,
         req.body.nickname,
         req.body.email
      )


      res.status(200).send({
         message: "Usuário atualizado!"
      })

   } catch (error) {
      res.send({
         message: error.message || error.sqlMessage
      })
   }
}