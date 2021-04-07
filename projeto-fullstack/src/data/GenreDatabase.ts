import { BaseDatabase } from "./BaseDatabase";

export class GenreDatabase extends BaseDatabase{

    private static TABLE_NAME = "PROJETO-FULLSTACK_GENRE"

    async create(id: string, name: string){
        try {
            await this.getConnection()
            .insert({id, name})
            .into(GenreDatabase.TABLE_NAME)
            
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
        
    }

}