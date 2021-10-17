import { Pool, QueryResult } from "pg";
import dotenv from "dotenv";
dotenv.config();

const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: parseInt(process.env.DB_PORT ?? "5432"),
});

export const query = (
  text: string,
  params: any[],
  callback: (err: Error, result: QueryResult<any>) => void
) => pool.query(text, params, callback);
