import { Request, Response, NextFunction, Router } from "express";
import * as PlayersService from "../services/playersService";
import { BasePlayer } from "../types/player.interface";

const playersRouter = Router();

playersRouter.get("/:engname", async (req: Request, res: Response) => {
  const engname = req.params.engname;
  console.log(engname);
  try {
    const player = await PlayersService.findByEngname(engname);

    // if not found, send status 400
    if (player === null) {
      res.sendStatus(400);
    } else {
      res.json(player);
    }
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).send("error");
    }
  }
});

playersRouter.get("/", async (req: Request, res: Response) => {
  try {
    const abilities = await PlayersService.findAll();
    res.json(abilities);
  } catch (e) {
    if (e instanceof Error) {
      res.status(500).send("error");
    }
  }
});

playersRouter.post("/", async (req: Request, res: Response) => {
  try {
    const player = req.body;
    const newPlayer = await PlayersService.create(player);

    res.status(201).json(newPlayer);
  } catch (e) {
    if (e instanceof Error) {
      res.status(500).send("error");
    }
  }
});

playersRouter.put("/:engname", async (req: Request, res: Response) => {
  const engname = req.params.engname;
  const playerUpdate: BasePlayer = req.body;

  try {
    const existingPlayer = await PlayersService.findByEngname(engname);

    if (existingPlayer === null) {
      const newPlayer = await PlayersService.create(playerUpdate);
      res.status(201).json(newPlayer);
    }
    const updatedPlayer = await PlayersService.update(engname, playerUpdate);
    res.status(200).json(updatedPlayer);
  } catch (e) {
    if (e instanceof Error) {
      res.status(500).send("error");
    }
  }
});
/*
playersRouter.delete("/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  try {
    await AbilityService.remove(id);

    res.status(204);
  } catch (e) {
    if (e instanceof Error) {
      res.status(500).send("error");
    }
  }
});
*/
export default playersRouter;
