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

//importing all routers from all different router files

import UserRouter from "./routes/user.route.js";
import HomeRouter from "./routes/home.route.js";
import CategoriesRouter from "./routes/categories.route.js";

//implimentation  of main router from where all other routes will be branches.
//routing starts from middleware and furthur Router of expressJS do routing of branches and implement functions.
app.use("user",UserRouter);
app.use("home",HomeRouter);
app.use("categories",CategoriesRouter);








export default app;
