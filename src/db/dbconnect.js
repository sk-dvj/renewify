import dotenv from "dotenv";
dotenv.config();
import { Sequelize, DataTypes, Model, Op } from 'sequelize';


const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
	host: process.env.DB_HOST || 'localhost',
	dialect: 'mysql', 
    port:process.env.DB_PORT
});

async function testConnection() {
	try {
		await sequelize.authenticate();
		console.log(`HEY DUDE! DATABASE CONNECTED!!\nHOST:${process.env.DB_HOST}`);

	}
	catch (error) {
		console.error(`chutiyon sahi kaam kro`,error);
	}	
}

export {sequelize,testConnection};