import express from "express";

import GameController from '../controllers/game.controller.js';

const gameRouter = express.Router();

gameRouter.post("/", GameController.create);
gameRouter.get("/", GameController.findAll);

export default gameRouter;