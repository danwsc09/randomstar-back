import { Request, Response, NextFunction, Router } from "express";
import * as MatchService from "../services/matchService";

const matchesRouter = Router();

matchesRouter.get("/id/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const match = await MatchService.findById(id);

    if (match === null) {
      res.status(404).send("match not found");
    } else {
      res.json(match);
    }
  } catch (e) {
    if (e instanceof Error) {
      res.status(500).send("error");
    }
  }
});

matchesRouter.get("/:engname", async (req: Request, res: Response) => {
  const engname = req.params.id;
  try {
    const match = await MatchService.findAllByPlayer(engname);

    if (match === null) {
      res.status(404).send("match not found");
    } else {
      res.json(match);
    }
  } catch (e) {
    if (e instanceof Error) {
      res.status(500).send("error");
    }
  }
});

matchesRouter.get("/", async (req: Request, res: Response) => {
  try {
    const matches = await MatchService.findAll();
    res.json(matches);
  } catch (e) {
    if (e instanceof Error) {
      res.status(500).send("error");
    }
  }
});

matchesRouter.post("/", async (req: Request, res: Response) => {
  try {
    const baseMatch = req.body;
    console.log("POST /api/matches:", baseMatch);
    const newMatch = await MatchService.create(baseMatch);

    res.status(201).json(newMatch);
  } catch (e) {
    if (e instanceof Error) {
      res.status(500).send("error");
    }
  }
});

matchesRouter.put("/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const matchUpdate = req.body;

  try {
    const existingMatch = await MatchService.findById(id);

    if (existingMatch === null) {
      const newItem = await MatchService.create(matchUpdate);

      res.status(201).json(newItem);
    }

    const updatedMatch = await MatchService.update(id, matchUpdate);
    res.status(200).json(updatedMatch);
  } catch (e) {
    if (e instanceof Error) {
      res.status(500).send("error");
    }
  }
});

matchesRouter.delete("/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  try {
    await MatchService.remove(id);

    res.sendStatus(204);
  } catch (e) {
    if (e instanceof Error) {
      res.status(500).send("error");
    }
  }
});

export default matchesRouter;
