import express from "express"
import { GetAllUsers, Login, Register } from "../controllers/userController.js"
import { isAdmin, isLogged } from "../middlewares/auth.js"

const userRouter = express.Router()
// All users in detail
userRouter.get("/users", isLogged, isAdmin, GetAllUsers)

// Connection system
userRouter.post('/login', Login)

//  Inscription system
userRouter.post('/register', Register)

// Logout system
// userRouter.get("/logout", Logout)



export default userRouter