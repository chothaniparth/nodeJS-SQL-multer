const express = require('express');
const app = express()
const userRouter = require('./routers/user');
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({extended : false}))

app.use('/', userRouter);

app.listen(PORT, console.log('server started'))