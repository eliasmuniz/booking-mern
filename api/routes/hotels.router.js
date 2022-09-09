import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";

// Controllers
import { createHotel, deleteHotel, getAllHotels, getHotel, updateHotel, countByCity, countByType } from "../controllers/hotel.controller.js";

const hotelsRouter = express.Router();

//CREATE
hotelsRouter.post("/", verifyAdmin, createHotel);

//UPDATE
hotelsRouter.put("/:id", verifyAdmin, updateHotel);

//DELETE
hotelsRouter.delete("/:id", verifyAdmin, deleteHotel);

//GET
hotelsRouter.get("/find/:id", getHotel);

//GET ALL
hotelsRouter.get("/", getAllHotels);

hotelsRouter.get("/countByCity", countByCity);
hotelsRouter.get("/countByType", countByType);


export default hotelsRouter