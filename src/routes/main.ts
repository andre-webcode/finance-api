import { Router } from "express";
import * as pingController from '../controllers/ping.js'
import * as userController from '../controllers/auth.js'
import * as revenueController from '../controllers/revenue.js'
import * as expenseController from '../controllers/expense.js'
import { PrivateRoute } from "../middleware/private.js";

export const mainRouter = Router() ;

mainRouter.get('/ping',pingController.ping)

mainRouter.post('/signup',userController.signup);
mainRouter.post('/signin',userController.signin);

mainRouter.post('/revenue',PrivateRoute, revenueController.revenuePost);
mainRouter.get('/revenues',PrivateRoute, revenueController.getRevenues);
mainRouter.put('/revenue/:id',PrivateRoute, revenueController.revenuePut);
mainRouter.delete('/revenue/:id',PrivateRoute, revenueController.revenueDelete);

mainRouter.post('/expense',PrivateRoute, expenseController.expensePost);
mainRouter.get('/expense',PrivateRoute, expenseController.expenseGet);
mainRouter.put('/expense/:id',PrivateRoute, expenseController.expensePut);
mainRouter.delete('/expense/:id',PrivateRoute, expenseController.expenseDelete);
