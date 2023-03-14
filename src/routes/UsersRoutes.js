import UsersController from "../controllers/Users";
import express from 'express';

const app = express()
const usersController = new UsersController();



app.get('/', usersController.teste)
app.post('/register', usersController.createUser)

export const UsersRouter = app;