import { Request, Response } from "express";
import { getUserByEmail } from "../data/getUserByEmail";
import { updatePassword } from "../data/updatePassword";
import { hash } from "../service/hashManager";
import { writeEmail } from "../service/mailer";

export async function resetPassword(req: Request, res:Response){

    let errorCode: number = 400;
    try {

        const {email} = req.body;

        if(!email || !email.includes("@")){
            throw new Error("Please fill the email field correctly");
        }

        const user = await getUserByEmail(email);
        if(!user){
            errorCode = 404;
            throw new Error("User not found.");
        }

        const password: string = "pamonha";
        const hashPassword = hash(password);

        await updatePassword(email, hashPassword);

        await writeEmail({
            from: "João Alves <joao@labenu.com.br>",
            to: email,
            subject: "New Password - To Do List",
            text: "Here is your new password",
            html: `<p>Hello, ${user.email}. We have updated your password. Your new password is ${password}.</p>`
        })

        res.status(200).send({message: "Password updated. Please check your email"});

    } catch (error) {
        res.status(errorCode).send({message: error.message})
    }

}