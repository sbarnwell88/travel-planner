const express = require("express");
const Activity = require("../models/activity");
const Trip = require("../models/trip");
const User = require('../models/user');
const router = express.Router({ mergeParams: true });

// INDEX ROUTE
router.get("/", (req,res) => {
  const userId = req.params.id;
  const tripId = req.params.tripId;
  const activityId = req.params.activityId;

  User.findById(userId).then((user) => {
    console.log(user)
    const foundTrip = user.trips.find((trip) => {
      return trip.id = tripId
    })
    console.log(foundTrip.activities)
    res.json(foundTrip.activities)
});
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

//UPDATE ACTIVITIES
router.put('/:activityId', (req, res) => {
  const activityIdToUpdate = req.params.activityId;
  const updatedActivityInfo = req.body;

  Activity.findByIdAndUpdate(
    activityIdToUpdate,
    updatedActivityInfo,
    {new: true}
  ).then((activity) => {
    console.log(`activity with ID ${activity._id} has been updated`);
    res.json(activity);
  }).catch((error) => {
    console.log(`${activity._id} failed to update`);
    console.log(error);
  });
});

//DELETE
router.get('/:activityId/delete', (req, res) => {
  const userId = req.params.id;
  const tripId = req.params.tripId;
  const activityId = req.params.activityId;

  User.findById(userId).then((user) => {
    console.log(user)
    const foundTrip = user.trips.find((trip) => {
      return trip.id = tripId
    })
    console.log(foundTrip)
    const foundActivity = foundTrip.activities.find((activity) => {
      return activity.id = activityId
    })
    console.log(foundActivity)
    foundTrip.activities.id(activityId).remove();
    user.save();

    console.log('success')
  })
})

module.exports = router;