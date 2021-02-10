import { Request, Response } from "express";
import { signupInputDTO } from "../business/entities/user"
import { businessLogin, businessSignup } from "../business/userBusiness";


export const signup = async (req: Request, res: Response) => {
      try {
         const input: signupInputDTO = {

         name: req.body.name,
         password: req.body.password,
         email: req.body.email
      }

      const token = await businessSignup(input);

       res.status(201).send({ message: "Usuario foi criado com sucesso!", token })
      } catch (error) {
      res.status(400).send(error.message)
    }
}

 export const login = async (req: Request, res: Response) => {
    try {

       const { email, password } = req.body

       const token = await businessLogin(email, password)

       res.status(200).send({ message: "Usuario logado com sucesso!!", token })

    } catch (error) {
      res.status(400).send(error.message)       
    }
}