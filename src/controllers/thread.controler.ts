import { Request, Response } from "express";
import threadServices from "../services/thread.service";

const threadController = {
  handleGetThreads: async (req: Request, res: Response) => {
    try {
      const threads = await threadServices.getThread();
      return res.status(200).json({ data: threads });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error });
    }
  },

  handleInsertThreads: async (req: Request, res: Response) => {
    const { content, userId } = req.body;
    try {

      const saveThread = await threadServices.insertThread(content, userId);
      return res.status(201).json({ data: saveThread });
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  },

  handleUpdateThreads: async (req: Request, res: Response) => {
    const { content, userId } = req.body;
    const threadId = req.params.id;

    try {
      const updateId = await threadServices.updateThread(content, userId, threadId)
      res.status(201).json({ data: updateId });
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  },

  handleDeleteThreads: async (req: Request, res: Response) => {
    const threadId = req.params.id;
    try {
      await threadServices.deleteThread(threadId);
      return res.status(201).json({ message: "behasil di hapus" });
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  },
};

export default threadController;
