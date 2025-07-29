import express from 'express';
import { loginUser, registerUser } from '../controllers/userController.js';

const userRouters = express.Router();

userRouters.post("/register", registerUser);
userRouters.post("/login", loginUser);

export default userRouters;
