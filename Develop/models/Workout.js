const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  type: {
    type: String,
    required: "Enter a exercise type"
  },
  name: {
    type: String,
    required: "Enter a workout name"
  },
  duration: {
    type: Number,
    required: "Enter a workout duration"
  },
  weight: {
    type: Number,
  },
  reps: {
    type: Number,
  },
  sets: {
    type: Number,
  },
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [{
    type: {
      type: String,
      required: "Enter a exercise type"
    },
    name: {
      type: String,
      required: "Enter a workout name"
    },
    duration: {
      type: Number,
      required: "Enter a workout duration"
    },
    weight: {
      type: Number,
    },
    reps: {
      type: Number,
    },
    sets: {
      type: Number,
    }
  }]


});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
