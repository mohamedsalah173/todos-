/* eslint-disable no-unused-vars */
const express = require('express');
const { todoController } = require('../controllers');

const router = express.Router();

router.get('/', (req, res) => {
  const { body: { title, status } } = req;
  todoController.create(title, status);
});
