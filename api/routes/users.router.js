import express from "express";

const usersRouter = express.Router();

usersRouter.get("/", (req,res)=>{
    res.json("Helo, this is auth endpoint")
})



export default usersRouter