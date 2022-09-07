import express from "express";

// Controllers
import { deleteUser, getAllUsers, getUser, updateUser } from "../controllers/user.controller.js";

const usersRouter = express.Router();

//UPDATE
usersRouter.put("/:id", updateUser);

//DELETE
usersRouter.delete("/:id", deleteUser);

//GET
usersRouter.get("/:id", getUser);

//GET ALL
usersRouter.get("/", getAllUsers);

export default usersRouter