import repliesRepository from "../repository/replies.repository";

const repliesServices = {
  getReplies: async () => {
    try {
      const allReplies = await repliesRepository.getReply();
      return allReplies;
    } catch (error) {
      console.log(error);
    }
  },

  insertReplies: async (reply: string, threadId: string) => {
    try {
      const saveReplies = await repliesRepository.insertReply(reply, threadId);
      return saveReplies;
    } catch (error) {
      console.log(error);
    }
  },

  updateReplies: async (reply: string, replyId: string, threadId: string) => {
    try {
      const updateReplies = await repliesRepository.updateReply(
        reply,
        replyId,
        threadId
      );
      return updateReplies;
    } catch (error) {
      console.log(error);
    }
  },

  deleteReplies: async (replyId: string) => {
    try {
      const repliesDelete = await repliesRepository.deleteReply(replyId);
      return repliesDelete;
    } catch (error) {
      console.log(error);
    }
  },
};

export default repliesServices;
