/* eslint-disable no-empty-pattern */
/* eslint-disable consistent-return */
/* eslint-disable no-undef */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
const express = require('express');
const { todoController } = require('../controllers');

const router = express.Router();

router.post('/', async (req, res) => {
  const { body: { title, status, userID } } = req;
  try {
    const todo = await todoController.create({ title, status, userID });
    res.json(todo);
  } catch (error) {
    res.json(error.message);
  }
});
router.get('/', async (req, res) => {
  const { query: {title} } = req;
  try {
    const todo = await todoController.get(title);
    res.json(todo);
  } catch (error) {
    res.send(error);
  }
});
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await todoController.deleteTodo(id);
    return res.json(todo);
  } catch (error) {
    return res.send(error.message);
  }
});
router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  try {
    const todo = await todoController.patchTodo(id, title);
    return res.json(todo);
  } catch (error) {
    return res.send(error.message);
  }
});

module.exports = router;
