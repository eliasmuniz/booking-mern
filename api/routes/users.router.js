import express from "express";
import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";

// Controllers
import { deleteUser, getAllUsers, getUser, updateUser } from "../controllers/user.controller.js";

const usersRouter = express.Router();

// // Check auth
// usersRouter.get("/checkauth", verifyToken, (req,res,next)=>{
//     res.send("hello user, you are loggein")
// });

//UPDATE
usersRouter.put("/:id", verifyUser, updateUser);

//DELETE
usersRouter.delete("/:id", verifyUser, deleteUser);

//GET
usersRouter.get("/:id", verifyUser, getUser);

//GET ALL 
usersRouter.get("/", verifyAdmin, getAllUsers);

export default usersRouter