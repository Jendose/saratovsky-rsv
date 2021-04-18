const Button = require("../models/button");

const allButtons = async (req, res) => {
  try {
    const result = await Button.find();
    res.send(result);
  } catch (e) {
    console.log(e);
  }
};

const addButton = async (req, res) => {
  const button = new Button({
    title: "help",
    step: 5,
    description: "Если вам интересно помогать другим, нажмите на кнопку",
  });
  try {
    const result = await button.save();
    res.redirect("/");
  } catch (e) {
    console.log(e);
  }
};

const updateButtonByTitle = async (req, res) => {
  console.log(req.body);
  const title = req.body.title;
  const desc = req.body.desc;
  const step = req.body.step;
  try {
    const result = await Button.findOneAndUpdate(
      { title: title },
      {
        $set: {
          step: step,
          description: desc,
        },
      }
    );
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  allButtons,
  addButton,
  updateButtonByTitle,
};
