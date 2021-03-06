const express = require("express");
const Activity = require("../models/activity");
const Trip = require("../models/trip");
const User = require('../models/user');
const router = express.Router();

//Index
router.get("/", (req,res) => {
  User.find().then(user => {
    res.json(user);
  })
});

//Show
router.get("/:id", (req,res) => {
  User.findById(req.params.id).then((user) => {
    res.json(user);
  });
});

module.exports = router;