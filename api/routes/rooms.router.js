import express from "express";

const roomsRouter = express.Router();

//CREATE

//UPDATE
//DELETE
//GET
//GET ALL

roomsRouter.get("/", (req,res)=>{
    res.json("Helo, this is auth endpoint")
})


export default roomsRouter