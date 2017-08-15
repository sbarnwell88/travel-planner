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
router.delete('/:activityId/delete', (req, res) => {
  const activityIdToDelete = req.params.activityId;
  Activity.findByIdAndRemove(activityIdToDelete).then(() => {
    console.log(`You have been visited by the demon of delete, ${activityIdToDelete} is gone`);
  })
    Activity.find().then(activity => {
    res.json(activity);
  })
});

module.exports = router;