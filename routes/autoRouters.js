import express from "express";
import autoControllers from "../controllers/autoControllers.js";
import { isEmpty } from "../middlewares/isEmpty.js";

const autoRouter = express.Router();

autoRouter.get("/", autoControllers.getAllAuto);
autoRouter.get("/:id", autoControllers.getOneAuto);
autoRouter.post("/", isEmpty, autoControllers.createAuto);
autoRouter.delete("/:id", autoControllers.deleteAuto);


export default autoRouter;