import express from 'express';
import replyController from '../controllers/replies.controler';

export const repliesRoutes = express.Router();

repliesRoutes.get("/", replyController.handleGetThreads)
repliesRoutes.post("/", replyController.handleInsertReplies)
repliesRoutes.put("/:id", replyController.handleUpdateThreads)
repliesRoutes.delete("/:id", replyController.handleDeleteThreads)