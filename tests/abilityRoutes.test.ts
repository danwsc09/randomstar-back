import request from "supertest";
import { app } from "../src/app";

describe("Test endpoints", () => {
  test("GET /api/abilities", async () => {
    const response = await request(app).get("/api/abilities");

    expect(response.statusCode).toBe(200);
  });
});
