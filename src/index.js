import UsersController from './controllers/Users';
import { UsersRouter } from './routes/UsersRoutes';

const express = require('express');

const User = require('./models/Users');
const app = express();
app.use(express.json());

app.listen('3030', () => {
    console.log('Conectado')
});

app.use('/users', UsersRouter)
