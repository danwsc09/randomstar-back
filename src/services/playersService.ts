import { query } from "../db";
import { Player } from "../types/player.interface";

export const findAll = async (): Promise<Player[]> => {
  const sqlQuery = "SELECT * FROM players;";
  const { rows } = await query(sqlQuery, []);

  return rows;
};

export const findByEngname = async (
  engname: string
): Promise<Player | null> => {
  const sqlQuery = "SELECT * FROM abilities WHERE id = $1";
  const { rows } = await query(sqlQuery, [engname]);

  if (rows.length === 0) return null;
  else return rows[0];
};

export const create = async ({
  korname,
  engname,
  afreecaid,
  rating,
  lastplayed,
}: Player): Promise<Player> => {
  const sqlQuery =
    "INSERT INTO players(korname, engname, afreecaid, rating, lastplayed) VALUES($1, $2, $3, $4, $5)";
  const { rows } = await query(sqlQuery, [
    korname,
    engname,
    afreecaid,
    rating,
    lastplayed,
  ]);
  return rows[0];
};

export const remove = async (engname: string): Promise<null | void> => {
  const sqlQuery = "DELETE FROM abilities WHERE engname = $1";
  await query(sqlQuery, [engname]);
  return null;
};

export const update = async (
  theEngname: string,
  { korname, afreecaid, rating }: Player
): Promise<Player> => {
  const sqlQuery =
    "UPDATE players SET korname = $1, afreecaid = $2, rating = $3 WHERE engname = $4";
  const { rows } = await query(sqlQuery, [
    korname,
    afreecaid,
    rating,
    theEngname,
  ]);
  return rows[0];
};
