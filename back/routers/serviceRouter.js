import express from "express"
import { GetServices } from "../controllers/serviceController.js";

const serviceRouter = express.Router();

// Home services
serviceRouter.get("/service", GetServices)

export default serviceRouter