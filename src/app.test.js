const request = require("supertest");
const server = require("./app.js");

afterAll(() => {
  server.close();
});

describe("testes na api", () => {
  test("deve retornar hello sonnarcloud ao acessar a rota /", async () => {
    const response = await request(server).get("/");
    expect(response.status).toEqual(200);
    expect(response.text).toContain("<h1>Hello SonnarCloud</p>");
  });

  test("deve retornar status code 200 ao acessar a rota /tests", async () => {
    const response = await request(server).get("/tests");
    expect(response.status).toEqual(200);
  });

  test("deve retornar status 404 ao acessar rota inexstente", async () => {
    const response = await request(server).get("/not-found");
    expect(response.status).toEqual(404);
  });

  test("deve retornar Hello World ao acessar a rota /hello-world ", async () => {
    const response = await request(server).get("/hello-world");
    expect(response.status).toEqual(200);
    expect(response.text).toContain("<h1>Hello World</h1>");
  });
});
