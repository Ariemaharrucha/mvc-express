import { Request, Response } from "express";
import userServices from "../services/user.services";

const userController = {
  handleGetUser: async (req: Request, res: Response) => {
    try {
      const allUser = await userServices.getUser();
      return res.status(200).json({ data: allUser });
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  },

  handleInsertUser: async (req: Request, res: Response) => {
    try {
      const { name, email, password } = req.body;
      const saveUser = await userServices.insertUser(name, email, password);
      return res.status(201).json({ data: saveUser });
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  },

  handleUpdateUser: async (req: Request, res: Response) => {
    try {
      const { name, email, password } = req.body;
      const userId = req.params.id;
      const updateUser = await userServices.updateUser(name, email, password, userId);
      return res.status(201).json({data: updateUser})
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  },

  handleDeleteUser: async (req: Request, res: Response) => {
    try {
      const userId = req.params.id;
      const result = await userServices.deleteUser(userId);
      return res.status(201).json({message: "user berhasil di hapus",data: result})
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  },
};

export default userController;
