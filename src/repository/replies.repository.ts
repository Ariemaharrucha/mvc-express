// buat crud di sini
import { Reply } from "../models/replies.schema";

const repliesRepository = {
  getReply: async () => {
    try {
      const allReply = await Reply.find().populate("threadId");
      return allReply;
    } catch (error) {
      console.log(error);
    }
  },

  insertReply: async (reply: string, threadId: string) => {
    try {
      const newReply = new Reply({
        reply,
        threadId,
      });
      const saveReply = await newReply.save();
      return saveReply;
    } catch (error) {
      console.log(error);
    }
  },

  updateReply: async (reply: string, replyId: string, threadId: string ) => {
    try {
      const updateReply = await Reply.findByIdAndUpdate(
        { _id: replyId },
        { reply, threadId },
        { new: true }
      );
      return updateReply;
    } catch (error) {
      console.log(error);
    }
  },

  deleteReply: async (replyId: string) => {
    try {
      const replyDelete = await Reply.findByIdAndDelete(replyId);
      return replyDelete;
    } catch (error) {
      console.log(error);
    }
  },
};

export default repliesRepository;
