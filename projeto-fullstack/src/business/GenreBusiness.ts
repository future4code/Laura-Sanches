import { GenreDatabase } from "../data/GenreDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { TokenManager } from "../services/TokenManager";

export class GenreBusiness{

    async create(name: string, token: string){

        try {

            if(!name){
                throw new Error("Invalid name. Please fill de field.")

            }

            const idGenerator = new IdGenerator();
            const id = idGenerator.generate();

            const tokenManager = new TokenManager();
            const verifiedToken = tokenManager.get(token)

            if(verifiedToken){
                throw new Error("Please log in.")
            }

            const genreDatabase = new GenreDatabase();
            await genreDatabase.create(id, name)

        } catch (error) {
            throw new Error("Erro ao criar: "+error.message)
        }
    }

}