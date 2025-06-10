import express from "express";
import { isLogged } from "../middlewares/auth.js"
import { AddCommand, GetCommands, GetCommandsUser, GetOneCommand } from "../controllers/commandController.js";

const commandRouter = express.Router()

// Route to create an order
commandRouter.post('/new_command', isLogged, AddCommand)

// To get all orders
commandRouter.get('/commands', isLogged, GetCommands)

// Route to user commands 
commandRouter.get("/commands_user", isLogged, GetCommandsUser)

// Route to user order details
commandRouter.get("/command/:id", isLogged, GetOneCommand)

export default commandRouter;