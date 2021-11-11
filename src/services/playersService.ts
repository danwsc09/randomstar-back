import { query } from "../db";
import { Player, BasePlayer } from "../types/player.interface";

const INITIAL_RATING = 1200;

export const findAll = async (): Promise<Player[]> => {
  const sqlQuery = "SELECT * FROM players;";
  const { rows } = await query(sqlQuery, []);

  return rows;
};

export const findByEngname = async (
  engname: string
): Promise<Player | null> => {
  const sqlQuery = "SELECT * FROM players WHERE engname = $1";
  const { rows } = await query(sqlQuery, [engname]);

  if (rows.length === 0) return null;
  else return rows[0];
};

export const create = async ({
  korname,
  engname,
  afreecaid,
}: BasePlayer): Promise<Player> => {
  const sqlQuery =
    "INSERT INTO players(korname, engname, afreecaid, rating) VALUES($1, $2, $3, $4)";
  const { rows } = await query(sqlQuery, [
    korname,
    engname,
    afreecaid,
    INITIAL_RATING,
  ]);
  return rows[0];
};

export const remove = async (engname: string): Promise<null | void> => {
  const sqlQuery = "DELETE FROM players WHERE engname = $1";
  await query(sqlQuery, [engname]);
  return null;
};

export const update = async (
  theEngname: string,
  { korname, afreecaid }: BasePlayer
): Promise<Player> => {
  const sqlQuery =
    "UPDATE players SET korname = $1, afreecaid = $2 WHERE engname = $3";
  const { rows } = await query(sqlQuery, [korname, afreecaid, theEngname]);
  return rows[0];
};
