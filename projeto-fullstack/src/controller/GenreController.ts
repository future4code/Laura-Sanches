import {Request, Response} from 'express'
import { GenreBusiness } from '../business/GenreBusiness';

export class GenreController{

    async create(req: Request, res: Response){
        try {
            const name = req.body.name;
            const token = req.headers.authorization as string;

            const genreBusiness = new GenreBusiness();
            await genreBusiness.create(name, token);
            res.status(200).send({message: "Genre created sucessful!"});
            
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    }

}