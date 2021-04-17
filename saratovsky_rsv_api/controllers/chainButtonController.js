const ChainButton = require('../models/chainButton');

const getChain = async (req, res) => {
  try {
    const result = await ChainButton.find();
    res.send(result);
  } catch (e) {
    console.log(e);
  }
};

const addChain = async (req, res) => {
  const chain = new ChainButton(req.body);
  try {
    const result = await chain.save();
    res.redirect('/');
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getChain,
  addChain,
};
