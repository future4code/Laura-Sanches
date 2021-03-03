import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { TokenManager } from "../services/TokenManager";
import { UserDatabase } from "../data/UserDatabase";
import { user } from "../model/User";

export class UserBusiness {
    async create(name: string, 
        email: string, 
        nickname: string, 
        password: string): Promise<string> {


        try {
            const idGenerator = new IdGenerator();
            const hashManager = new HashManager();
            const tokenManager = new TokenManager();
            const userDataBase = new UserDatabase();

            const id = idGenerator.generate();
            const hashpassword = await hashManager.hash(password);

            if(!name || !email || !nickname || !password){
                throw new Error("All fields must be filled.")
            }

            if(email.indexOf("@") === -1){
                throw new Error("Invalid Email.");
            }

            if(password.length < 6){
                throw new Error("Password must have at least 6 characters.")
            }

            await userDataBase.create(id, name, nickname, email, hashpassword);

            const token = tokenManager.generate(id);

            return token;
            
        } catch (error) {
            throw new Error("Erro ao criar"+error.message)
        }
    }

    async login (email: string, password: string): Promise<string>{

        try {
            const hashManager = new HashManager();
            const tokenManager = new TokenManager();
            const userDataBase = new UserDatabase();
            if(!email || !password){
                throw new Error("Please fill all the fields")
            }

            const userFromDB: user = await userDataBase.getByEmail(email);
            if(!userFromDB){
                throw new Error("User not found!")
            }

            const passwordCheck = await hashManager.compare(password, userFromDB.password)
            if(!passwordCheck){
                throw new Error("Wrong password")
            }

            const token = tokenManager.generate(userFromDB.id)
            return token

        } catch (error) {
            throw new Error("Erro ao logar" + error.message)
        }
    }
}