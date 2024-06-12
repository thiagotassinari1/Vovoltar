const express = require('express');

const dotenv = require('dotenv');

const cors = require('cors');
const userRouter = require('./routes/userRouter');
const vagaRouter = require('./routes/vagaRouter');
const app = express();

app.set('port', process.env.PORT || 3005);
app.use(cors());
app.use(express.json());

app.use('/api', userRouter);
app.use('/api', vagaRouter);

module.exports = app;