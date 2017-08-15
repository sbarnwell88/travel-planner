const express = require("express");
const Activity = require("../models/activity");
const Trip = require("../models/trip");
const User = require('../models/user');
const router = express.Router({ mergeParams: true });

//INDEX
router.get("/", (req, res) => {
  const userId = req.params.id;
  const tripId = req.params.tripId;

  User.findById(userId)
  .then((user) => {
    const arrayOfTrips = user.trips
    res.json(arrayOfTrips)
  });
});
//SHOW
router.get('/:tripId', (req, res) => {
    const userId = req.params.id;
    const tripId = req.params.tripId;

    User.findById(userId)
        .then((user) => {
            const foundTrip = user.trips.find((trip) => {
                return trip.id === tripId;
            })
            res.json(foundTrip)
        })
        .catch((error) => {
            console.log("Failed to find" + error);
        })
});

// router.post("/", (req, res) => {
//   const newTrip = new Trip();
//   console.log(req.body);
//   newTrip = req.body.trip;

//   newTrip.save().then((trip) => {
//     res.json(trip);
//   }).catch(err => console.log(err));
// })



module.exports = router;