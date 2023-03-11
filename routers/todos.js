/* eslint-disable no-unused-vars */
const express = require('express');
const { todoController } = require('../controllers');

const router = express.Router();

router.post('/', async (req, res) => {
  const { body: { title, status } } = req;
  const todo = await todoController.create(title, status);
  res.json(todo);
});

module.exports = router;