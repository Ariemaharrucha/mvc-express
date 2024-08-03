import userRepository from "../repository/user.repository";

const userServices = {
  getUser: async () => {
    try {
      const allUser = await userRepository.getUser();
      return allUser;
    } catch (error) {
      console.log(error);
    }
  },

  insertUser: async (name: string, email: string, password: string) => {
    try {
      const saveUser = await userRepository.insertUser(name, email, password);
      return saveUser;
    } catch (error) {
      console.log(error);
    }
  },

  updateUser: async (
    name: string,
    email: string,
    userId: string,
    password: string
  ) => {
    try {
      const updateUser = await userRepository.updateUser(name, email, userId, password);
      return updateUser;
    } catch (error) {
      console.log(error);
    }
  },

  deleteUser: async (userId: string) => {
    try {
      const userDelete = await userRepository.deleteUser(userId);
      return userDelete;
    } catch (error) {
      console.log(error);
    }
  },
};

export default userServices;
