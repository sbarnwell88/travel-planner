const express = require("express");
const Activity = require("../models/activity");
const Trip = require("../models/trip");
const router = express.Router();

router.get("/", (req,res) => {
  User.find().then(users => {
    res.json(users);
  })
});

router.get("/:id", (req,res) => {
  User.findById(req.params.id).then((users) => {
    res.json(users);
  });
});

module.exports = router;