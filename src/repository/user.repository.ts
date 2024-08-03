// buat crud di sini
import { User } from "../models/User.scehma";

const userRepository = {
  getUser: async () => {
    try {
      const allUser = await User.find();
      return allUser;
    } catch (error) {
      console.log(error);
    }
  },

  insertUser: async (name: string, email: string, password: string) => {
    try {
      const newUser = new User({
        name,
        email,
        password
      });
      const saveUser = await newUser.save();
      return saveUser;
    } catch (error) {
      console.log(error);
    }
  },

  updateUser: async (name: string, email: string, password:string, userId: string) => {
    try {
      const updateUser = await User.findByIdAndUpdate(
        { _id: userId },
        { name, email, password },
        { new: true }
      );
      return updateUser;
    } catch (error) {
      console.log(error);
    }
  },

  deleteUser: async (userId: string) => {
    try {
      const userDelete = await User.findByIdAndDelete(userId);
      return userDelete;
    } catch (error) {
      console.log(error);
    }
  },
};

export default userRepository;
