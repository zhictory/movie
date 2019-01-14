const Koa = require('koa');
const koaBody = require('koa-body');
 
const app = new Koa();
 
app.use(koaBody());
app.use(ctx => {
  ctx.body = `Request Body: ${JSON.stringify(ctx.request.body)}`;
});
 
app.listen(9999);