/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const { mongoose } = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    minLength: 5,
    maxLength: 10,
    required: true,

  },
  userID: {
    type: mongoose.Types.ObjectId,
    ref: 'Users',
  },
  status: {
    type: String,
    default: 'to-do',
    enum: ['to-do', 'in-Progress', 'Done'],
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Todo = mongoose.model('Todo', todoSchema);

// Todo.create({
//   title: 'start stady',
//   status: 'to-do',
// });

module.exports = Todo;
