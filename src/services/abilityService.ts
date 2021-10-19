import { query } from "../db";
import { Ability, Abilities, BaseAbility } from "../types/abilities.interface";

export const findAll = async (): Promise<Abilities> => {
  const sqlQuery = "SELECT * FROM abilities;";
  const { rows } = await query(sqlQuery, []);

  return rows;
};

export const findById = async (id: number): Promise<Ability | null> => {
  const sqlQuery = "SELECT * FROM abilities WHERE id = $1";
  const { rows } = await query(sqlQuery, [id]);

  if (rows.length === 0) return null;
  else return rows[0];
};

export const create = async ({
  abilityname,
  explanation,
}: BaseAbility): Promise<Ability> => {
  const sqlQuery =
    "INSERT INTO abilities(abilityname, explanation) VALUES($1, $2)";
  const { rows } = await query(sqlQuery, [abilityname, explanation]);
  return rows[0];
};

export const remove = async (id: number): Promise<null | void> => {
  const sqlQuery = "DELETE FROM abilities WHERE id = $1";
  await query(sqlQuery, [id]);
  return null;
};

export const update = async (
  abilityId: number,
  { id, abilityname, explanation, removed }: Ability
): Promise<Ability> => {
  const sqlQuery =
    "UPDATE abilities SET abilityname = $1, explanation = $2, removed = $3 WHERE id = $4";
  const { rows } = await query(sqlQuery, [
    abilityname,
    explanation,
    removed,
    id,
  ]);
  return rows[0];
};
