import express from "express";
import { GetCoachings, GetOneCoaching } from "../controllers/coachingController.js";

const coachingRouter = express.Router()

// to get all coachings
coachingRouter.get('/coachings', GetCoachings)

// To get the dynamic parameter of the coachings page
coachingRouter.get('/coaching/:id', GetOneCoaching)

export default coachingRouter;