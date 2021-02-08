import express from "express";
import { create, post } from "../postController";


export const postRouter = express.Router();

postRouter.get("/create", create);
postRouter.post("/:id", post );