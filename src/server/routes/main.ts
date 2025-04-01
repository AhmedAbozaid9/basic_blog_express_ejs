import express, { Request, Response } from "express";

const router = express.Router();

export default router.get("/", (_req: Request, res: Response) => {
  res.send("Hello World!");
});
