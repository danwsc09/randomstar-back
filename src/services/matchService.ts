import { query } from "../db";
import { Match, BaseMatch } from "../types/match.interface";

export const findAll = async (): Promise<Match[]> => {
  const sqlQuery = "SELECT * FROM matches2v2;";
  const { rows } = await query(sqlQuery, []);

  return rows;
};

export const findAllByPlayer = async (
  engname: string
): Promise<Match[] | null> => {
  const sqlQuery =
    "SELECT * FROM matches2v2 WHERE winner1Name = $1 or winner2Name = $2 or loser1Name = $3 or loser2Name = $4";
  const { rows } = await query(sqlQuery, [engname, engname, engname, engname]);

  if (rows.length === 0) return null;
  else return rows;
};

export const findById = async (id: number): Promise<Match | null> => {
  const sqlQuery = "SELECT * FROM matches2v2 WHERE id = $1";
  const { rows } = await query(sqlQuery, [id]);

  if (rows.length === 0) return null;
  return rows[0];
};

export const create = async ({
  memo,
  summary,
  winner1Name,
  winner1Location,
  winner1Race,
  winner1AbilityId,
  winner2Name,
  winner2Location,
  winner2Race,
  winner2AbilityId,
  loser1Name,
  loser1Location,
  loser1Race,
  loser1AbilityId,
  loser2Name,
  loser2Location,
  loser2Race,
  loser2AbilityId,
}: BaseMatch): Promise<Match> => {
  const sqlQuery =
    "INSERT INTO matches2v2(memo, summary, winner1name, winner1location, winner1race, winner1abilityid, winner2name, winner2location, winner2race, winner2abilityid, loser1name, loser1location, loser1race, loser1abilityid, loser2name, loser2location, loser2race, loser2abilityid) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)";

  const { rows } = await query(sqlQuery, [
    memo || "",
    summary || "",
    winner1Name,
    winner1Location,
    winner1Race,
    winner1AbilityId,
    winner2Name,
    winner2Location,
    winner2Race,
    winner2AbilityId,
    loser1Name,
    loser1Location,
    loser1Race,
    loser1AbilityId,
    loser2Name,
    loser2Location,
    loser2Race,
    loser2AbilityId,
  ]);
  return rows[0];
};

export const remove = async (id: number): Promise<null | void> => {
  const sqlQuery = "DELETE FROM matches2v2 WHERE id = $1";
  await query(sqlQuery, [id]);
  return null;
};

export const update = async (
  id: number,
  {
    memo,
    summary,
    winner1Name,
    winner1Location,
    winner1Race,
    winner1AbilityId,
    winner2Name,
    winner2Location,
    winner2Race,
    winner2AbilityId,
    loser1Name,
    loser1Location,
    loser1Race,
    loser1AbilityId,
    loser2Name,
    loser2Location,
    loser2Race,
    loser2AbilityId,
  }: BaseMatch
): Promise<Match> => {
  const sqlQuery =
    "UPDATE matches2v2 SET memo = $1, summary = $2, winner1name = $3, winner1location = $4, winner1race = $5, winner1abilityid = $6, winner2name = $7, winner2location = $8, winner2race = $9, winner2abilityid = $10, loser1name = $11, loser1location = $12, loser1race = $13, loser1abilityid = $14, loser2name = $15, loser2location = $16, loser2race = $17, loser2abilityid = $18 WHERE id = $19";
  const { rows } = await query(sqlQuery, [
    memo,
    summary,
    winner1Name,
    winner1Location,
    winner1Race,
    winner1AbilityId,
    winner2Name,
    winner2Location,
    winner2Race,
    winner2AbilityId,
    loser1Name,
    loser1Location,
    loser1Race,
    loser1AbilityId,
    loser2Name,
    loser2Location,
    loser2Race,
    loser2AbilityId,
    id,
  ]);
  return rows[0];
};
