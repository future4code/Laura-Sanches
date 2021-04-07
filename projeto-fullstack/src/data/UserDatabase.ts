import { user } from "../model/User";
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase{

    private static TABLE_NAME = "PROJETO-FULLSTACK_USER"

   async create(id: string,
          name: string,
          email: string,
          nickname: string,
          password: string){

            try {
                await this.getConnection()
                .insert({
                    id: id,
                    name: name,
                    email: email,
                    nickname: nickname,
                    password: password
                }).into(UserDatabase.TABLE_NAME);
            } catch (error) {
                throw new Error(error.sqlMessage || error.message)
            }
    }

    async getByEmail(email: string): Promise<user>{

        try {
            const result = await this.getConnection()
                .select("*")
                .from(UserDatabase.TABLE_NAME)
                .where({email})

                if(!result[0]){
                    throw new Error("User not found on database.");
                }

                return {
                    id: result[0].id,
                    name: result[0].name,
                    email: result[0].email,
                    password: result[0].password
                }

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

}