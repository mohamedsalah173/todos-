/* eslint-disable import/no-dynamic-require */
/* eslint-disable no-use-before-define */
/* eslint-disable import/no-extraneous-dependencies */
const express = require(express);

const { default: mongoose } = require('mongoose');

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    minLength: 8,
    unique: true,
    required: true,

  },
  fName: {
    type: String,
    minLength: 3,
    maxLength: 15,
    required: true,
  },
  lName: {
    type: String,
    minLength: 3,
    maxLength: 15,
    required: true,
  },
  createdAt: { type: Date, default: new Date() },
  updatedAt: { type: Date, default: new Date() },
});

const Users = mongoose.model('Users', userSchema);

module.exports = Users;
