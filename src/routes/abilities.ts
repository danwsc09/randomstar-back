import { Request, Response, NextFunction, Router } from "express";

const abilitiesRouter = Router();

abilitiesRouter.get("/", async (req: Request, res: Response) => {
  // const now = await pool.query("SELECT * FROM abilities");
  res.send("get all abilities");
});

abilitiesRouter.get("/:id", async (req: Request, res: Response) => {});

abilitiesRouter.post("", async (req: Request, res: Response) => {});

abilitiesRouter.put("/:id", async (req: Request, res: Response) => {});

abilitiesRouter.delete("/:id", async (req: Request, res: Response) => {});

export { abilitiesRouter };
