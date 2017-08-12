const express = require("express");
const Activity = require("../models/activity");
const Trip = require("../models/trip");
const User = require('../models/user');
const router = express.Router();

router.get("/", (req,res) => {
  Activity.find().then(activity => {
    res.json(activity);
  })
});


module.exports = router;