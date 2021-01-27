import { connection } from "..";

export async function getUserByEmail(email: string) {

    const result = await 
    connection
    .select("*")
    .from("to_do_list_users")
    .where({email});

    return result[0];
}
