import { connection } from "../index";

const TABLE_NAME: string = "to_do_list_users";

export async function updatePassword(email: string, password: string){

    await connection.raw(`
    UPDATE ${TABLE_NAME}
    SET password = "${password}"
    WHERE email = "${email}";
    `
    )
}