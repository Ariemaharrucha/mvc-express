// buat crud di sini
import { Thread } from "../models/thread.schema";

const threadRepository = {
  getThread: async () => {
    try {
      const allThread = await Thread.find().populate('userId');
      return allThread;
    } catch (error) {
      console.log(error);
    }
  },

  insertThread: async (content: string, userId:string) => {
    try {
      const newThread = new Thread({
        content,
        userId,
      });
      const saveThread = await newThread.save();
      return saveThread;
    } catch (error) {
      console.log(error);
    }
  },

  updateThread: async (content: string, userId:string, threadId: string) => {
    try {
      const updateThread = await Thread.findByIdAndUpdate(
        { _id: threadId },
        { content, userId },
        { new: true }
      );
      return updateThread;
    } catch (error) {
      console.log(error);
    }
  },

  deleteThread: async (ThreadId: string) => {
    try {
      const threadDelete = await Thread.findByIdAndDelete(ThreadId);
      return threadDelete;
    } catch (error) {
      console.log(error);
    }
  },
};

export default threadRepository;
