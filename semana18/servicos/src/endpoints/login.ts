import { Request, Response } from "express";
import { getUserByEmail } from "../data/getUserByEmail";
import { generateToken } from "../service/authenticator";
import { compare } from "../service/hashManager";

export async function login(req: Request, res: Response) {

   try {

      const input: loginInput = {
         email: req.body.email,
         password: req.body.password
      }

      if (!input.email || !input.password) {
         throw new Error("Please fill all the fields.");
      }

      const user = await getUserByEmail(input.email);

      if (!user) {
         throw new Error("User not found!");
      }

      const passwordIsCorrect: boolean = compare(
         input.password,
         user.password
      )

      if (!passwordIsCorrect) {
         throw new Error("Incorrect Password.");
      }

      const token = generateToken({
         id: user.id,
         role:user.role
      });
      res.status(200).send({ token });

   } catch (error) {
      res.status(400).send({ message: error.message });
   }


}

export type loginInput = {
   email: string,
   password: string
}