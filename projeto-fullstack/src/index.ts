import express, {Express} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {AddressInfo} from 'net';
import { UserController } from './controller/UserController';
import { UserBusiness } from './business/UserBusiness';

dotenv.config();
const app: Express = express();
app.use(express.json())
app.use(cors())

const userController = new UserController();
app.post("/user/signup", userController.create);
app.post("/user/login", userController.login);

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`)
    } else {
        console.error(`Failure upon starting server`)
    }
});