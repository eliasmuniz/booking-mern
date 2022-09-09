import express from "express";
import {
  createRoom,
  deleteRoom,
  getAllRooms,
  getRoom,
  updateRoom,
} from "../controllers/room.controller.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const roomsRouter = express.Router();

//CREATE
roomsRouter.post("/:hotelid", verifyAdmin, createRoom);

//UPDATE
roomsRouter.put("/:id", verifyAdmin, updateRoom);

//DELETE
roomsRouter.delete("/:id", verifyAdmin, deleteRoom);

//GET
roomsRouter.get("/:id", getRoom);

//GET ALL
roomsRouter.get("/", getAllRooms);

export default roomsRouter;
