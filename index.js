const koa = require('koa');
const static = require('koa-static');
const path = require('path')

const app = new koa();

app.use(static(path.join(__dirname + '/static')))

app.listen(3000,function(){
    console.log('启动成功');
});