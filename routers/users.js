/* eslint-disable no-undef */
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

router.get('/', async (req, res) => {
//   const { query: { userName, fName, lName } } = req;
  try {
    const user = await userController.get();
    res.json(user);
  } catch (error) {
    res.json(error.message);
  }
});

router.patch('/:id', async (req, res) => {
  const { params: { id } } = req;
  const { body: { userName, fName, lName } } = req;

  try {
    const user = await userController.patch(id, fName);
    res.json(user);
  } catch (error) {
    res.json(error.message);
  }
});
router.delete('/:id', async (req, res) => {
  const { params: { id } } = req;
  try {
    const user = await userController.remove(id);
    res.json(user);
  } catch (error) {
    res.json(error.message);
  }
});

module.exports = router;
