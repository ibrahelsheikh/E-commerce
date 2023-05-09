import express from "express";
import* as dotenv from "dotenv";
import morgan from "morgan";
import dbconn from "./config/dbconnection.js";
import mongoose from"mongoose"
import cookieParser from "cookie-parser";

import {ProductsRouter} from "./routes/productRoute.js";
import { UsersRouter } from "./routes/userRoute.js";
import{authRouter}from "./routes/authRoute.js";
import { authToken } from "./middlewares/authMiddleware.js";
// Load env variables
dotenv.config({}); 

// DB connection
dbconn();

// Initialize express
const app = express();


// Middlewares
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
app.use(express.json()); 
app.use(cookieParser());

// mount routes
app.use(ProductsRouter);
app.use(authToken,UsersRouter);
app.use(authRouter);
// Listen to port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});