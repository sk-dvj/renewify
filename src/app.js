import dotenv from "dotenv"
dotenv.config();
import express from "express";
import cors from "cors";

const app = express();

app.get('/',(req,res)=>{
    res.send(`You are at parent place in server.From here wherever you want to go accordingly create a route to there,`)
})

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))






export default app;
