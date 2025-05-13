import express from "express";

import RecordController from '../controllers/record.controller.js';

const recordRouter = express.Router();

gameRouter.post("/", RecordController.create);
gameRouter.get("/", RecordController.findAll);

export default recordRouter;