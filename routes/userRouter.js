import express from "express";
import userControllers from "../controllers/userControllers.js";
import { isEmpty } from "../middlewares/isEmpty.js";
import validateBody from "../decorators/validateBody.js";
import { registerSchema, loginSchema } from "../schemas/userSchemas.js";
import authenticate from "../middlewares/authenticate.js";

const authRouter = express.Router();

authRouter.post(
  "/register",
  isEmpty,
  validateBody(registerSchema),
  userControllers.register
);

authRouter.post(
  "/login",
  isEmpty,
  validateBody(loginSchema),
  userControllers.login
);

authRouter.get("/logout", authenticate, userControllers.logout);

authRouter.get("/current", authenticate, userControllers.current);

export default authRouter;
