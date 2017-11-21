const express = require('express')
const mongoose = require('mongoose')
const userRouter = require('./user.js')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const app = express()

app.use(cookieParser())
app.use(bodyParser.json())

app.use('/user', userRouter)

app.listen(9093, function() {
	console.log('app running a port 9093')
})