import { connection } from "../index";
import { USER_ROLES } from "../types/user";

export default async function insertUser(
    id: string,
    name: string,
    nickname: string,
    password: string,
    email: string,
    role:USER_ROLES
) {
    await connection.insert({
        id,
        name,
        nickname,
        password,
        email,
        role
    }).into('to_do_list_users')
}