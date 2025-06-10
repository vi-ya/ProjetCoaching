import express from "express";
import { Admin, GetFields, AddCoaching, DeleteCoaching, EditCoaching } from "../controllers/adminController.js";
import { isAdmin, isLogged } from "../middlewares/auth.js"

const adminRouter = express.Router()

// Route admin, services
adminRouter.get('/admin', isLogged, isAdmin, Admin)

// Admin route, add service
adminRouter.post('/admin/add', isLogged, isAdmin, AddCoaching)

// Route admin, set the service options to add 
adminRouter.get('/admin/fields', isLogged, isAdmin, GetFields)

// Route admin, delete service
adminRouter.delete("/delete/:id", isLogged, isAdmin, DeleteCoaching)

//Route admin, update service
adminRouter.put("/edit/:id", isLogged, isAdmin, EditCoaching)

export default adminRouter;