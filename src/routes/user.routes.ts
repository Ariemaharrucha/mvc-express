import express from 'express';
import userController from '../controllers/user.controller';

export const userRoutes = express.Router();

userRoutes.get("/",userController.handleGetUser)
userRoutes.post("/",userController.handleInsertUser)
userRoutes.put("/:id", userController.handleUpdateUser);
userRoutes.delete("/:id", userController.handleDeleteUser);
