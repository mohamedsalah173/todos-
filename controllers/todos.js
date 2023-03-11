/* eslint-disable no-unused-vars */
const Todo = require('../models/todos');

const create = (title, status) => {
  Todo.create({ title, status });
};
