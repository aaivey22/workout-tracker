const router = require("express").Router();
const Workout = require("../models/Workout.js")
const weight = [];


module.exports = function (router) {

    // GET router retreives exercise data displayed on /stats page 
    router.get("/api/workouts/range", (req, res) => {
        Workout.find({})
            // parses and sends it as an array of objects to the front end
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            })
    });

    router.post("/api/workouts", (req, res) => {
        Workout.create({})
            .then(result => {
                res.json(result);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });

    router.put("/api/workouts/:id", (req, res) => {
        Workout.findByIdAndUpdate(req.params.id,)
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    })

};
    //     router.post("/api/workouts", function (req, res) {
    //         db.Workout.create({})
    //             .then(function (dbWorkout) {
    //                 res.json(dbWorkout)
    //             })
    //             .catch(err => {
    //                 res.json(err);
    //             });
    //     })

    // }



//     router.get("/api/workouts", (req, res) => {
//         var query = {};
//         if (req.query.workout_id) {
//             query.WorkoutId = req.query.workout_id;
//         }
//         db.Post.findAll({
//             where: query,
//             include: [db.Workout]
//         }).then(function (dbPost) {
//             res.json(dbPost);
//         });
//     });


//     router.put("/api/workouts:id", (req, res) => {
//         Workout.update(
//             req.body,
//             {
//                 where: {
//                     id: req.body.id
//                 }
//             }).then(function (dbPost) {
//                 res.json(dbPost);
//             });
//     });
// };
// module.exports = router;


// set up post route to create a new empty object and return the id (mongoose automatically creates an id)

// put route that updates item that was just created because it is empty. Receive id in the request params, the req body will contain the required info.
// once the item is found in the db, we need to set the req-body to the information.

// getall route, query db and return everything (run find method and pass in an empty object)

// getweeklyworkouts route, use find to pass nothing. Use a mongoose method called limit .limit(7)
// goes to api/workouts/range (see frontend to see where range is targeted)

// delete route targeted by the id which comes from the request params.