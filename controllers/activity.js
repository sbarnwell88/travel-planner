const express = require("express");
const Activity = require("../models/activity");
const Trip = require("../models/trip");
const User = require('../models/user');
const router = express.Router({ mergeParams: true });


router.get("/", (req,res) => {
  Trip.findById(req.params.tripId).then((trip) => {
    res.json(trip);
  });
});

router.get("/", (req,res) => {
  Activity.find().then(activity => {
    res.json(activity);
  })
});

router.post("/", (req, res) => {
  const tripId = req.params.tripId;
  console.log(tripId);
  const newActivityInfo = req.body;
  Trip.findById(tripId).then((trip) => {
    res.json(trip);
    
})
})
  
  
//find user 
//pass user id as query param
//save user 


// const newActivity = new Activity(newActivityInfo);
//     trip.activities.push(newActivity);
//     return trip.save();
//   }).then((trip) => {
//     newActivity.description = req.body.activities.description;
//   newActivity.price = req.body.activities.price;

//   newActivity.save().then((activity) => {
//     res.json(activity);
//   }).catch(err => console.log(err));

router.get("/:id", (req,res) => {
  Activity.findById(req.params.id).then((activity) => {
    res.json(activity);
  });
});

module.exports = router;