/* eslint-disable func-names */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable consistent-return */
/* eslint-disable no-useless-catch */
/* eslint-disable no-unused-vars */
const Todo = require('../models/todos');

const create = (data) => {
  Todo.create(data);
};
/// getting Methods
const get = (title) => Todo.find()
  .select('title')
//   .limit(5)
  .populate('userID')
  .exec();
// const get = function () {
//   if (title) {
//     Todo.findById({ _id: title });
//     return get;
//   }
//   Todo.find()
//     .select('title')
//     .limit(5)
//     .populate('userID')
//     .exec();
//   return get;
// };

const deleteTodo = (todoID) => Todo.deleteOne({ _id: todoID }).exec();

const patchTodo = (todoID, title) => Todo.updateOne({ _id: todoID }, { title });

module.exports = {
  create,
  get,
  deleteTodo,
  patchTodo,
};
