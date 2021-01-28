import { connection } from "../index";

export default async function insertUser(
    id: string,
    name: string,
    nickname: string,
    password: string,
    email: string
) {
    await connection.insert({
        id,
        name,
        nickname,
        password,
        email
    }).into('to_do_list_users')
}