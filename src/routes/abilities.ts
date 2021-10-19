import { Request, Response, NextFunction, Router } from "express";
import { query } from "../db";

const abilitiesRouter = Router();

abilitiesRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const sqlQuery = "SELECT * FROM abilities WHERE id = $1";
    const db = await query(sqlQuery, []);
  } catch (e) {
    if (e instanceof Error) {
      res.status(500).send("error");
    }
  }
});

abilitiesRouter.get("/", async (req: Request, res: Response) => {
  try {
    const sqlQuery = "SELECT * FROM abilities;";
    const { rows } = await query(sqlQuery, []);
    res.json(rows);
  } catch (e) {
    if (e instanceof Error) {
      res.status(500).send("error");
    }
  }
});

abilitiesRouter.post("", async (req: Request, res: Response) => {});

abilitiesRouter.put("/:id", async (req: Request, res: Response) => {});

abilitiesRouter.delete("/:id", async (req: Request, res: Response) => {});

export { abilitiesRouter };
