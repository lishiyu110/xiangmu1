const express = require('express')
const app = express()

//解决跨域问题
const cors = require('cors')
app.use(cors())


//建立登录路由模块
const userRouter = require('./router/user')
app.use('/api',userRouter)


        //建立服务器
app.listen(3006, () => {
  console.log('http://127.0.0.1:3006')
})

