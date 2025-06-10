import express from "express";
import { connectDB } from "./config/database.js";
import cors from "cors"
import dotenv from "dotenv"
import serviceRouter from "./routers/serviceRouter.js";
import coachingRouter from "./routers/coachingRouter.js";
import userRouter from "./routers/userRouter.js";
import adminRouter from "./routers/adminRouter.js";
import commandRouter from "./routers/commandRouter.js";

dotenv.config()

// Creating an express application
const app = express();

// Parser l'application 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Links to public folder
app.use(express.static('public'));


app.use(cors(   {
   origin: process.env.BASE_URL_ORIGIN,
   credentials: true
 }
))

connectDB

// Routes
app.use(serviceRouter);
app.use(coachingRouter)
app.use(userRouter)
app.use(adminRouter)
app.use(commandRouter)

// Server monitoring port
app.listen(process.env.PORT, () => {
    console.log(`Le serveur ${process.env.BASE_URL}`)
})




