import threadRepository from "../repository/thread.repository";

const threadServices = {
  getThread: async () => {
    try {
      const allThread = await threadRepository.getThread();
      return allThread;
    } catch (error) {
      console.log(error);
    }
  },

  insertThread: async (content: string, userId: string) => {
    try {
      const saveThread = await threadRepository.insertThread(content, userId);
      return saveThread;
    } catch (error) {
      console.log(error);
    }
  },

  updateThread: async (content: string, userId: string, threadId: string) => {
    try {
      const updateThread = await threadRepository.updateThread(
        content,
        userId,
        threadId
      );
      return updateThread;
    } catch (error) {
      console.log(error);
    }
  },

  deleteThread: async (threadId: string) => {
    try {
      const threadDelete = await threadRepository.deleteThread(threadId);
      return threadDelete;
    } catch (error) {
      console.log(error);
    }
  },
};

export default threadServices;
