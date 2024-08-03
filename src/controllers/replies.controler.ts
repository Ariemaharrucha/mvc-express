import { Request, Response } from "express";
import repliesServices from "../services/replies.servics";

const replyController = {
  handleGetThreads: async (req: Request, res: Response) => {
    try {
      const replies = await repliesServices.getReplies();
      return res.status(200).json({ data: replies });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error });
    }
  },

  handleInsertReplies: async (req: Request, res: Response) => {
    const { reply, threadId } = req.body;
    try {
      const saveReply = await repliesServices.insertReplies(reply, threadId);
      return res.status(201).json({ data: saveReply });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error });
    }
  },

  handleUpdateThreads: async (req: Request, res: Response) => {
    const { reply, threadId } = req.body;
    const replyId = req.params.id;

    try {
      const updateReply = await repliesServices.updateReplies(reply, replyId, threadId );
      res.status(201).json({ data: updateReply });
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  },

  handleDeleteThreads: async (req: Request, res: Response) => {
    const replyId = req.params.id;
    try {
      await repliesServices.deleteReplies(replyId);
      return res.status(201).json({ message: "behasil di hapus" });
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  },
};

export default replyController;
