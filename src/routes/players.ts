import { Request, Response, NextFunction, Router } from "express";
import * as PlayersService from "../services/playersService";

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
/*
playersRouter.put("/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const abilityUpdate = req.body;

  try {
    const existingAbility = await AbilityService.findById(id);

    if (existingAbility === null) {
      const newItem = await AbilityService.create(abilityUpdate);

      res.status(201).json(newItem);
    }

    const updatedAbility = await AbilityService.update(id, abilityUpdate);
    res.status(200).json(updatedAbility);
  } catch (e) {
    if (e instanceof Error) {
      res.status(500).send("error");
    }
  }
});

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
