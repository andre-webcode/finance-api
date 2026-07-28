import { Router } from "express";
import * as pingController from '../controllers/ping.js'
import * as userController from '../controllers/user.js'

export const mainRouter = Router() ;

mainRouter.get('/ping',pingController.ping)

mainRouter.post('/users',userController.createUsers);