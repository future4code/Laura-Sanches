import express, { Express } from "express"
import cors from "cors"
import { userRouter } from "./controller/routes/userRoute"
import { postRouter } from "./controller/routes/postRouter"

/**************************** CONFIG ******************************/

const app: Express = express()
app.use(express.json())
app.use(cors())


/**************************** ENDPOINTS ******************************/

app.use('/users', userRouter )
app.use('/posts', postRouter)



/**************************** SERVER INIT ******************************/

app.listen(3003, () => {
   console.log("Servidor rodando na porta 3003")
})