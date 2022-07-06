import request from "supertest";
import app from "./app";


describe("POST /users", () => {
  describe("giving a username and password", () => {
    //should save the username and password to the database
    //should respond with a json object containing the user id
    test("should respond with a status code of 200", async () => {
      const response = await request(app).post("/users").send({
        username: "username",
        password: "password",
      });

      expect(response.statusCode).toBe(200);
    });
    test("should respond json in the content type header", async () => {
      const response = await request(app).post("/users").send({
        username: "username",
        password: "password",
      });

      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });

    test("response has userId", async () => {
      const response = await request(app).post("/users").send({
        username: "username",
        password: "password",
      });

      expect(response.body.userId).toBeDefined();
    });
  });

  describe("when the username and password is missing", () => {
    test("should respond with a status code of 400", async () => {
      const response = await request(app).post("/users").send({
        username: "username",
      });

      expect(response.statusCode).toBe(400);
    });
  });
});
