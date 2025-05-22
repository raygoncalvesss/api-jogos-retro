import express from "express";

import RecordController from '../controllers/record.controller.js';

const recordRouter = express.Router();

recordRouter.post("/", RecordController.create);
recordRouter.get("/", RecordController.findAll);

export default recordRouter;