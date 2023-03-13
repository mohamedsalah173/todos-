/* eslint-disable no-undef */
const express = require('express');

const todoRoutes = require('./todos');

const userRourtes = require('./users');

const router = express.Router();

router.use('/todos', todoRoutes);

router.use('/users', userRourtes);

module.exports = router;
