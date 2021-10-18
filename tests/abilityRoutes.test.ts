import { Server } from "http";
import request from "supertest";
import { app } from "../src/app";
import { end as endPool } from "../src/db";

// https://github.com/visionmedia/supertest/issues/520#issuecomment-436071071

describe("Test abilities endpoints", () => {
  let server: Server, agent: request.SuperAgentTest;

  beforeAll((done) => {
    server = app.listen(4000, () => {
      agent = request.agent(app);
      done();
    });
  });

  afterAll((done) => {
    server && server.close(done);
    endPool();
  });

  test("GET /api/abilities should return all abilities", async () => {
    const response = await agent.get("/api/abilities");

    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThan(150);
    expect(response.body[0]).toHaveProperty("abilityname");
  });

  test("GET /api/abilities/:id should return one ability", async () => {
    const response = await agent.get("/api/abilities");

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("abilityname");
  });
});
