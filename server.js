const express = require('express')
const morgan = require('morgan')
const app = express()


//미들웨어
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))



const PORT = 3838

app.listen(PORT, console.log'server started!')