const express = require("express");
const Activity = require("../models/activity");
const Trip = require("../models/trip");
const User = require('../models/user');
const router = express.Router({ mergeParams: true });


router.get("/", (req,res) => {
  Activity.find().then(activity => {
    res.json(activity);
  })
});

router.post("/", (req, res) => {
  const tripId = req.params.tripId;
  const newActivityInfo = req.body.activities;
  
  Trip.findById(tripId).then((trip) => {
    const newActivity = new Activity(newActivityInfo);
    trip.activities.push(newActivity);
    console.log(newActivity)
    return trip.save();
  }).then((trip) => {
    res.json(trip);
  //   // activity.price = req.body.activities.price;
  //   // activity.save().then((activity) => {
  //   res.json(activity);
  }).catch(err => console.log(err));
// })
})


router.get("/:id", (req,res) => {
  Activity.findById(req.params.id).then((activity) => {
    res.json(activity);
  });
});

module.exports = router;