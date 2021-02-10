import { connection } from "../index";
export default async function insertUser(
    id: string,
    name: string,
    password: string,
    email: string,
) {
    await connection.insert({
        id,
        name,
        password,
        email
    }).into('cookenu_users')
}