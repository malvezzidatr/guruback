import express from 'express';
import { UsersRouter } from './routes/UserRouter.routes';

const app = express();

app.use(express.json())
app.listen('3030', () => {
    console.log('conectado')
})

app.use('/users', UsersRouter)
