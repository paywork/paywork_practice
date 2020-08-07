const express = require('express')
const morgan = require('morgan')
const app = express()

const userRoute = require('./routes/user')

//미들웨어
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/user',userRoute)


const PORT = 3838;

app.listen(PORT, console.log'server started!')