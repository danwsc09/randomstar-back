import { Request, Response, NextFunction, Router } from "express";
import * as AbilityService from "../services/abilityService";

const matchesRouter = Router();

matchesRouter.get("/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const ability = await AbilityService.findById(id);

    if (ability === null) {
      res.status(404).send("ability not found");
    } else {
      res.json(ability);
    }
  } catch (e) {
    if (e instanceof Error) {
      res.status(500).send("error");
    }
  }
});

matchesRouter.get("/", async (req: Request, res: Response) => {
  try {
    const abilities = await AbilityService.findAll();
    res.json(abilities);
  } catch (e) {
    if (e instanceof Error) {
      res.status(500).send("error");
    }
  }
});

matchesRouter.post("/", async (req: Request, res: Response) => {
  try {
    const baseAbility = req.body;
    const newAbility = await AbilityService.create(baseAbility);

    res.status(201).json(newAbility);
  } catch (e) {
    if (e instanceof Error) {
      res.status(500).send("error");
    }
  }
});

matchesRouter.put("/:id", async (req: Request, res: Response) => {
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

matchesRouter.delete("/:id", async (req: Request, res: Response) => {
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

export { matchesRouter as abilitiesRouter };
