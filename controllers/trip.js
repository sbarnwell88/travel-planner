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

// NEW ROUTE
router.post("/", (req, res) => {
  const userId = req.params.id;
  const newTripInfo = req.body.trips;

  User.findById(userId).then((user) => {
    const newTrip = new Trip(newTripInfo);
    user.trips.push(newTrip);
    console.log(newTrip)
    return user.save();
  }).then((user) => {
    res.json(user);
  }).catch(err => console.log(err));
})


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

// // UPDATE TRIP
// router.put('/:tripId', (req, res) => {
//     const userId = req.params.id;
//     const tripId = req.params.tripId;
//     const updatedTripInfo = req.body;
//     const foundTripArray =[];
//     User.findById(userId)
//         .then((user) => {            
//             const foundTrip = user.trips.find((trip) => {
//                 return trip.id === tripId;
//             })
//             foundTrip.place = req.body.place;
//             foundTrip.date = req.body.date;
//             foundTripArray.push(foundTrip);

//             return user.save();

//                 }).then((user) => {
//                     console.log("updated user with ID of " + user._id)
//                     res.json(foundTripArray)
//                 })

// });



module.exports = router;