
const koa=require('koa')
const static=require('koa-static')
const path=require('path')
const router=require('koa-router')()
const app=new koa()

const query=require("./db/index")
app.use(static(path.join(process.cwd(),'./public/')))

app.use(router.routes());
app.use(router.allowedMethods())

router.get('/userlist', async (ctx)=>{
  let data=await query()
   ctx.body={
       code:1,
       data
   }
})

router.get("/detail", async (ctx)=>{
     ctx.body="详情"
})

app.listen(3000,()=>{
    console.log("服务启动成功")
})