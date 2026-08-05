import { Router } from "express";
import * as pingController from '../controllers/ping.js'
import * as userController from '../controllers/auth.js'
import * as revenueController from '../controllers/revenue.js'
import { PrivateRoute } from "../middleware/private.js";

export const mainRouter = Router() ;

mainRouter.get('/ping',pingController.ping)

mainRouter.post('/signup',userController.signup);
mainRouter.post('/signin',userController.signin);

mainRouter.post('/revenue',PrivateRoute, revenueController.revenuePost);
mainRouter.get('/revenue',PrivateRoute, revenueController.getRevenues)