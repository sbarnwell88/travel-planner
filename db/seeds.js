require("dotenv").config();
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

var User = require('../models/user');
var Trip = require('../models/trip');
var Activity = require('../models/activity');

mongoose.Promise = global.Promise;

User.remove({}, (err) => console.log(err));
Trip.remove({}, (err) => console.log(err));
Activity.remove({}, (err) => console.log(err));

const vatican = new Activity ({
    description: 'go to the Vatican',
    date: new Date(),
    price: 0,
    reservation: 'n/a',
    paidFor: false
})

const wineTasting = new Activity ({
    description: 'wine tasting in the Colchagua Valley',
    date: new Date(),
    price: 250,
    reservation: 'n/a',
    paidFor: false
})

const hiking = new Activity ({
    description: '5 day hike in Patagonia',
    date: new Date(),
    price: 1000,
    reservation: 'google.com',
    paidFor: true
})

const Italy = new Trip ({
    place: 'Rome',
    date: new Date(),
    activities: [vatican]
})

const Chile = new Trip ({
    place: 'Chile',
    date: new Date(),
    activities: [hiking, wineTasting]
})

const susy = new User ({
    username: 'susy',
    password: 'password1',
    trips: [Chile, Italy]
})

vatican.save().then(() => console.log("Activity Saved!"));
wineTasting.save().then(() => console.log("Activity Saved!"));
hiking.save().then(() => console.log("Activity Saved!"));
Italy.save().then(() => console.log("Trip Saved!"));
Chile.save().then(() => console.log("Trip Saved!"));
susy.save().then(() => console.log("User Saved!"));


mongoose.connection.close();