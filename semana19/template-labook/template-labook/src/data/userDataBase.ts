import { BaseDatabase }  from "./BaseDataBase"
import { user } from "../business/entities/user"

export class UserDatabase extends BaseDatabase{

   insertUser = async (
      user: user
   ) => {
      await BaseDatabase.connection.insert({
         id: user.id,
         name: user.name,
         email: user.email,
         password: user.password,
      }).into('labook_users')
   }

    selectUserByEmail = async (
      email: string
    ): Promise<user> => {
      try {
         const result = await BaseDatabase.connection("labook_users")
            .select("*")
            .where({ email })

         return {
            id: result[0].id,
            name: result[0].name,
            email: result[0].email,
            password: result[0].password
         }

      } catch (error) {
         throw new Error(error.slqMessage || error.message)
      }
    }


    selectUserById = async (
      id: string
    ): Promise<user> => {
      try {
         const result = await BaseDatabase.connection("labook_users")
            .select("*")
            .where({ id })

         return {
            id: result[0].id,
            name: result[0].name,
            email: result[0].email,
            password: result[0].password
         }

      } catch (error) {
         throw new Error(error.slqMessage || error.message)
      }
    }
}