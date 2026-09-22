const request = require("supertest");
const app = require("../app");

describe("GET /", () => {
  test("should return 200 status code", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
  });

  test("should return correct message", async () => {
    const response = await request(app).get("/");

    expect(response.text).toBe("Hello From Express Applicatin from app.js!");
  });
});
