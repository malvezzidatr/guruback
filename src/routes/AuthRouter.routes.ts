import express from 'express';
import { AuthController } from '../controllers/AuthController';

const app = express()
const authController = new AuthController()

app.post('/register', (req, res) => authController.createFirebaseUser(req, res))
 
export const AuthRouter = app;