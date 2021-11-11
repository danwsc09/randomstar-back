import { query } from "../db";
import { Match, BaseMatch } from "../types/match.interface";

export const findAll = async (): Promise<Match[]> => {
  const sqlQuery = "SELECT * FROM matches2v2;";
  const { rows } = await query(sqlQuery, []);

  return rows;
};

export const findAllByPlayer = async (
  player: number
): Promise<Match[] | null> => {
  const sqlQuery =
    "SELECT * FROM matches2v2 WHERE winner1Name = $1 or winner2Name = $2 or loser1Name = $3 or loser2Name = $4";
  const { rows } = await query(sqlQuery, [player, player, player, player]);

  if (rows.length === 0) return null;
  else return rows;
};

/*
export const create = async (theMatch: BaseMatch): Promise<Match> => {
  return;
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
*/
