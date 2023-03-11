/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');

const app = express();

const mongoose = require('mongoose');

const routes = require('./routers/index');

const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/test';

mongoose.connect(MONGO_URL);

app.use(express.json());

app.use(routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listing on... ${port}`);
});
