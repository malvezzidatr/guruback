import { UsersController } from "../controllers/UserController";
import express from 'express';

const app = express()
const userController = new UsersController();

app.get('/', (req, res) => userController.listAllUsers(req, res))
app.post('/register', (req, res) => userController.createUser(req, res))

export const UsersRouter = app;