const mongoose = require('mongoose');

const activitySchema = mongoose.Schema({
  description: String,
  date: Date,
  price: Number,
  reservationInfo: String,
  paidFor: Boolean
});

const tripSchema = mongoose.Schema({
  place: String,
  date: Date,
  activities: [activitySchema]
});

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  trips: [tripSchema]
});

const Activity = mongoose.model('Activity', activitySchema);
const Trip = mongoose.model('Trip', tripSchema);
const User = mongoose.model('User', userSchema);

module.exports = {
  Activity, Trip, User
}