import express from "express"
import dotenv from "dotenv"
import connectDb from "./utils/connectDb.js"
dotenv.config()
import dns from "dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const app = express()
const PORT = process.env.PORT || 5000
app.get("/",(req,res)=>{
    res.json({message:" ExamNotes backend running "})
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
    connectDb()
})