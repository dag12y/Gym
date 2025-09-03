const express = require("express");
const dotenv = require("dotenv").config();
const workoutRoutes = require("./routes/workouts");
const mongoose = require("mongoose");

//Intitalizing express
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);

    next();
});

//routes
app.use("/api/workouts", workoutRoutes);

//connect to db
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log("database connected!");
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log(`server is running on port ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
