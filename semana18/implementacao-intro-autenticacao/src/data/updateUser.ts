import { connection } from "..";

export default async function updateUser(
   id: string,
   name?: string,
   nickname?: string,
   email?: string
) {

   await connection("to_do_list_users")
      .update({
         name, nickname, email
      })
      .where({ 
         id 
      })

}