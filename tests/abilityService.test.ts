import { end as endPool } from "../src/db";
import { findAll, findById } from "../src/services/abilityService";

describe("Test AbilityService's find() methods that interact with DB", () => {
  afterAll(() => {
    endPool();
  });

  test("findAll should return all abilities (over 150 at the time of writing)", async () => {
    const response = await findAll();

    expect(response.length).toBeGreaterThan(150);
  });

  test("findById should return one ability if id is valid", async () => {
    const response = await findById(1);

    expect(response).toHaveProperty("abilityname");
  });

  test("findById should return null if id is invalid", async () => {
    const response = await findById(999999999);

    expect(response).toBeNull();
  });
});
