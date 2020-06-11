const db = require("../models")
const weight = [];
// reudce takes the arr of items to sum beginning on item 0
function getTotal(arr) {
    return arr.reduce(getSum, 0)
}

function getSum(accumulator, num) {
    return accumulator += num;
}

module.exports = function (app) {
    app.get("/api/workouts", function (req, res) {
        db.Workout.find({})
            .then(dbWorkout => {
                console.log(dbWorkout)
                dbWorkout.forEach(function(workout) {
                    workout.exercises.forEach(function(exercise) {
                        weight.push(exercise.weight)
                    })
                })
                const filterWeight = weight.filter(function(weight) {
                    return weight !== undefined;
                })
                // console.log(filterWeight)
                const weightTotal = getTotal(filterWeight)
                console.log(weightTotal)
                // console.log(dbWorkout[0].exercises);
                res.json(dbWorkout); //parses and sends it as an array of objects to the front end
            })
            .catch(err => {
                res.status(400).json(err);
            });

    })

    app.post("/api/workouts", function(req, res) {
        db.Workout.create({})
        .then(function(dbWorkout) {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.json(err);
          });
    })

    app.put("/api/workouts/:id", function(req, res) {
db.Workout.findByIdAndUpdate(req.params.id, {$push:{exercises:req.body}})
    })
}


