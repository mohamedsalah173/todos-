/* eslint-disable import/no-dynamic-require */
/* eslint-disable no-use-before-define */
/* eslint-disable import/no-extraneous-dependencies */
const express = require(express);

const { default: mongoose } = require('mongoose');

const userSchema = new mongoose.Schema({
  userName: String,
  fName: String,
  lName: String,
  createdAt: { type: Date, default: new Date() },
  updatedAt: { type: Date, default: new Date() },
});

const Users = mongoose.model('Users', userSchema);
