const User = require('../models/user');

const addUser = async (req, res) => {
  const user = new User({
    name: 'Artem',
    age: 21,
  });
  try {
    const result = await user.save();
    res.send(result);
  } catch (e) {
    console.log(e);
  }
};

const allUsers = async (req, res) => {
  try {
    const result = await User.find();
    res.send(result);
  } catch (e) {
    console.log(e);
  }
};

const singleUser = async (req, res) => {
  try {
    const result = await User.findById('607a6a156194aa19ac078703');
    res.send(result);
  } catch (e) {
    console.log(e);
  }
};

const getById = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await User.findById(id);
    // res.render('name_react_module', {user: result})
  } catch (e) {
    console.log(e);
  }
};

const deleteById = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await User.findByIdAndDelete(id);
    res.json({ redirect: '/' });
  } catch (e) {
    console.log(e);
  }
};

const postAddUser = async (req, res) => {
  const user = new User(req.body);
  try {
    const result = await user.save();
    res.redirect('/');
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  addUser,
  allUsers,
  singleUser,
  postAddUser,
  getById,
  deleteById,
};
