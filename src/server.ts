import cors from 'cors';
import express from 'express';
import { getAuth } from 'firebase/auth';
import { AuthRouter } from './routes/AuthRouter.routes';


const app = express();
app.use(express.json())
// app.use(cors());

app.listen('3030', () => {
    console.log('conectado')
})

app.get('/', (req, res) => {
    res.json({msg: 'teste'})
})
// app.use('/auth', AuthRouter)

// export const auth = getAuth();
