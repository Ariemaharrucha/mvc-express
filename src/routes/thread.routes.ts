import express from 'express';
import threadController from '../controllers/thread.controler';

export const threadRoutes = express.Router();

threadRoutes.get('/', threadController.handleGetThreads);
threadRoutes.post('/', threadController.handleInsertThreads);
threadRoutes.put('/:id', threadController.handleUpdateThreads);
threadRoutes.delete('/:id', threadController.handleDeleteThreads);