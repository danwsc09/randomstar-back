import { end as endPool } from "../src/db";
// import { findAll, findById } from "../src/services/matchService";

describe("Test MatchService's find() methods that interact with DB", () => {
  afterAll(() => {
    endPool();
  });

  test("findAll should return all matches", async () => {
    expect(5).toBe(1);
  });

  test("findById should return one match if id is valid", async () => {});

  test("findById should return null if id is invalid", async () => {});
});
