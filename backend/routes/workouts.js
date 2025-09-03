const express = require("express");
const {createWorkout, getWorkout,getWorkouts}=require("../controllers/workoutController")

const router = express.Router();

//get all workouts
router.get("/", getWorkouts);

//get a single workout
router.get("/:id", getWorkout);

//create workout
router.post("/", createWorkout);



router.delete("/:id", (req, res) => {
    res.json({ message: "delete a workout" });
});

router.patch("/:id", (req, res) => {
    res.json({ message: "update a workout" });
});

module.exports = router;
