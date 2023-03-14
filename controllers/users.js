/* eslint-disable no-undef */
/* eslint-disable import/no-self-import */

const Users = require('../models/users');

const create = (data) => Users.create(data);

const get = () => Users.find();

const patch = (id, fName) => Users.updateOne({ _id: id }, { fName });

const remove = (id, fName) => Users.deleteOne({ _id: id });

module.exports = {
  create,
  get,
  patch,
  remove,
};
