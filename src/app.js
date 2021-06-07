const Koa = require("koa");
const Router = require("koa-router");
const logger = require("koa-logger");

const app = new Koa();
const router = new Router();

app.use(logger());

router.get("/", (ctx, _) => {
  ctx.body = "<h1>Hello SonnarCloud</p>";
});

router.get("/tests", (ctx, _) => {
  ctx.body = "<h4>Hello tests</h4>";
});

router.get("/hello-world", (ctx, _) => {
  ctx.body = "<h1>Hello World</h1>";
});

app.use(router.routes());
app.use(router.allowedMethods());
const server = app.listen(3000);

module.exports = server;
