const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()

const approveRoute = require('./routes/approve')
const errorRoute = require('./routes/error')
const inviteRoute = require('./routes/invite')
const milestoneRoute = require('./routes/milestone')
const participantRoute = require('./routes/participant')
const policyRoute = require('./routes/policy')
const projectRoute = require('./routes/project')
const reviewRoute = require('./routes/review')
const sessionRoute = require('./routes/session')
const subscribeRoute = require('./routes/subscribe')
const userRoute = require('./routes/user')
const user_methodRoute = require('./routes/user_method')

//데이터베이스 연결
const dbaddress = "mongodb+srv://admin:admin1234@cluster0.7l85d.mongodb.net/nodeshoppingmall?retryWrites=true&w=majority"



//미들웨어
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//라우팅
app.use('/approve',approveRoute)
app.use('/error',errorRoute)
app.use('/invite', inviteRoute)
app.use('/milestone', milestoneRoute)
app.use('/participant',participantRoute)
app.use('/policy',policyRoute)
app.use('/project',projectRoute)
app.use('/review',reviewRoute)
app.use('/session',sessionRoute)
app.use('/subscribe',subscribeRoute)
app.use('/user',userRoute)
app.use('/user_method',user_methodRoute)



const PORT = 1111;

app.listen(PORT, console.log('server started!'))