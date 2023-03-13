/* eslint-disable import/no-self-import */

const Users = require('../models/users');

const create = (data) => Users.create(data);

module.exports = {
  create,
};
