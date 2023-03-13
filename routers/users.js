/* eslint-disable no-unused-vars */
const express = require('express');
const { userController } = require('../controllers');

const router = express.Router();

router.post('/', async (req, res) => {
  const { body: { userName, fName, lName } } = req;
  try {
    const user = await userController.create({ userName, fName, lName });
    res.json(user);
  } catch (error) {
    res.json(error.message);
  }
});
module.exports = router;
