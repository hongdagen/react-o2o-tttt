import Koa from 'koa'
import Router from 'koa-router'
import babel_co from 'babel-core/register';
import babel_po from 'babel-polyfill';
import ad from './home/ad'
import cors from 'koa2-cors';
import homeListData from './home/list'
var app = new Koa();
app.use(cors());
let home = new Router()

home.get('/homead', async(ctx) => {
    ctx.body = ad
})
home.get('/homelist/:city/:page',async(ctx)=>{
    ctx.body=homeListData
})

var router = new Router();
router.use('/api', home.routes(), home.allowedMethods())
app.use(router.routes()).use(router.allowedMethods())
app.listen(3000)
console.log('start-quick is starting at port 3000')