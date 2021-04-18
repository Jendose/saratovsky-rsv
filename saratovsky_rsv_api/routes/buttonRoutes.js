const express = require("express");
const buttonController = require("../controllers/buttonController");
const router = express.Router();
const bodyParser = require("body-parser");
const json = bodyParser.json();
const parser = bodyParser.urlencoded({ extended: true });

router.get("/start-learning", buttonController.allButtons);
router.get("/add-button", buttonController.addButton);
router.post("/update", parser, buttonController.updateButtonByTitle);

module.exports = router;
