import UsersController from "../controllers/UserController";
import express from 'express';

const app = express()
const usersController = new UsersController();

app.get('/', usersController.listAllUsers)
app.post('/register', usersController.createUser)

export const UsersRouter = app;