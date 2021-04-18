const express = require("express");
const buttonController = require("../controllers/buttonController");
const router = express.Router();
const bodyParser = require("body-parser");
const json = bodyParser.json();

router.get("/start-learning", buttonController.allButtons);
router.get("/add-button", buttonController.addButton);
router.post("/update", json, buttonController.updateButtonByTitle);

module.exports = router;
