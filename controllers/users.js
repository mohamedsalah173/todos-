/* eslint-disable import/no-self-import */

const Users = require('../models/users');

const create = (fName, lName) => {
  Users.create({ fName, lName });
};

module.exports = {
  create,
};
