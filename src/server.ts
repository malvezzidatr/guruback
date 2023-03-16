import express from 'express';
import { UsersRouter } from './routes/UserRouter.routes';
import cors from 'cors';
import dotenv from 'dotenv'
dotenv.config()

const app = express();
app.use(express.json())
app.use(cors());

app.listen('3030', () => {
    console.log('conectado')
})

app.use('/users', UsersRouter)

