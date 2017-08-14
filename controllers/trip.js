const express = require("express");
const Activity = require("../models/activity");
const Trip = require("../models/trip");
const User = require('../models/user');
const router = express.Router();

router.get("/", (req,res) => {
  Trip.find().then(trip => {
    res.json(trip);
  })
});

router.get("/:tripId", (req,res) => {
  Trip.findById(req.params.tripId).then((trip) => {
    res.json(trip);
  });
});

router.post("/", (req, res) => {
  const newTrip = new Trip();
  console.log(req.body);
  newTrip = req.body.trip;

  newTrip.save().then((trip) => {
    res.json(trip);
  }).catch(err => console.log(err));
})

// router.put("/:tripId", (req, res) => {
//   Trip.findByIdAndUpdate(req.params.tripId, {points: req.body.points}).then((trip) =>{
//     res.json(trip);
//   })
// });

module.exports = router;