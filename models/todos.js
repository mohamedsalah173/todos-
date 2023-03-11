/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const { mongoose } = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: String,
  status: { type: String, default: 'to-do' },
  startedAt: { type: Date, default: Date.now },
});

const Todo = mongoose.model('Todo', todoSchema);

Todo.create({
  title: 'start stady',
  status: 'to-do',
});

module.exports = Todo;
