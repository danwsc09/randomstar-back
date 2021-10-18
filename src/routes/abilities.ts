import { Request, Response, NextFunction, Router } from "express";
import { query } from "../db";

const abilitiesRouter = Router();

abilitiesRouter.get("/", async (req: Request, res: Response) => {
  // const now = await pool.query("SELECT * FROM abilities");
  try {
    const { rows } = await query("SELECT * FROM abilities;", []);
    res.json(rows);
  } catch (e) {
    if (e instanceof Error) {
      res.status(500).send("error");
    }
  }
});

abilitiesRouter.get("/:id", async (req: Request, res: Response) => {});

abilitiesRouter.post("", async (req: Request, res: Response) => {});

abilitiesRouter.put("/:id", async (req: Request, res: Response) => {});

abilitiesRouter.delete("/:id", async (req: Request, res: Response) => {});

export { abilitiesRouter };
