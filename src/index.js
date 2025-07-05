import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import {sequelize,testConnection} from "./db/dbconnect.js";


const PORT = process.env.PORT || 4000;

testConnection()
.then(
	app.listen(PORT,()=>{
		console.log(`Server is listening at PORT:${PORT}`);
	})
)
.catch((err)=>{
	console.log(`NO SERVER NO DATABASE`);
})






