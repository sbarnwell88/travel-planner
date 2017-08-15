const express = require("express");
const Activity = require("../models/activity");
const Trip = require("../models/trip");
const User = require('../models/user');
const router = express.Router({ mergeParams: true });

// INDEX ROUTE
router.get("/", (req, res) => {
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
router.get("/:activityId", (req, res) => {
  const userId = req.params.id;
  const tripId = req.params.tripId;
  const activityId = req.params.activityId;

  User.findById(userId)
  .then((user) => {
    const foundTrip = user.trips.find((trip) => {
      return trip.id === tripId
    })
    const foundActivity = foundTrip.activities.find((activity) => {
      return activity.id === activityId
    })
    console.log(foundTrip.activities)
    res.json(foundActivity)
  });
});

// UPDATE ACTIVITY
router.put('/:activityId', (req, res) => {
    const userId = req.params.id;
    const tripId = req.params.tripId;
    const activityId = req.params.activityId;
    const updatedActivityInfo = req.body;
    const foundActivityArray =[];
    User.findById(userId)
         
        .then((user) => {            
            const foundTrip = user.trips.find((trip) => {
                return trip.id === tripId;
            })
            const foundActivity = foundTrip.activities.find((activity) => {
              return activity.id === activityId;
            })
            foundActivity.description = req.body.description;
            foundActivity.price = req.body.price;
            foundActivityArray.push(foundActivity);

            return user.save();

                }).then((user) => {
                    console.log("updated user with ID of " + user._id)
                    res.json(foundActivityArray)
                })

});

//DELETE
router.delete('/:activityId/delete', (req, res) => {
  const userId = req.params.id;
  // console.log(userId)
  const tripId = req.params.tripId;
  const activityId = req.params.activityId;

  User.findById(userId)
    .then((user) => {
      // console.log(user)
      const newTrips = user.trips.map((trip) => {
        if (trip.id === tripId){
          const newActivities = trip.activities.filter((activity) => {
            return activity.id !== activityId
          })
          trip.activities = newActivities;
        }
        console.log(trip)
        return trip
      })
      console.log(newTrips)
      user.trips = newTrips;
      return user.save();
    })
    .then(() => {
      console.log('success')
      res.send(200);
    })
    .catch((error) => {
      console.log(error);
    })
})

module.exports = router;