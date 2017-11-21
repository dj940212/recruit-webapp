const express = require('express')
const mongoose = require('mongoose')
const userRouter = require('./user.js')

const app = express()
app.use('/user', userRouter)

app.listen(9093, function() {
	console.log('app running a port 9093')
})