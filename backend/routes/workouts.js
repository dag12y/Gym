const express = require("express");
const Workout = require("../models/WorkoutModel");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({ message: "Get all workout" });
});

router.get("/:id", (req, res) => {
    res.json({ message: "Get all a single workout" });
});

router.post("/", async (req, res) => {
    const { title, load, reps } = req.body;

    try {
        const workout = await Workout.create({ title, load, reps });
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.delete("/:id", (req, res) => {
    res.json({ message: "delete a workout" });
});

router.patch("/:id", (req, res) => {
    res.json({ message: "update a workout" });
});

module.exports = router;
