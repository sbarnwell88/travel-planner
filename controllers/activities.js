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

// NEW ROUTE
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
  }).catch(err => console.log(err));
})

// SHOW ROUTE
router.get("/:activityId", (req,res) => {
  Activity.findById(req.params.activityId).then((activity) => {
    res.json(activity);
  });
});

//DELETE
router.delete('/:activityId', (req, res) => {
    Activity.remove({
        _id: req.params.activityId
    }, 
      (err => {
        if (err)
            res.send(err);
        res.json({ message: 'Activity deleted!' })
    }));
});

module.exports = router;