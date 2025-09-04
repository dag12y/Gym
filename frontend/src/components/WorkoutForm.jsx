import { useState } from "react";

export default function WorkoutForm() {
    const [title, setTitle] = useState("");
    const [load, setLoad] = useState("");
    const [reps, setReps] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        const workout = { title, load, reps };
        const response = await fetch("/api/workouts/", {
            method: "POST",
            body: JSON.stringify(workout),
            headers: {
                "content-type": "application/json",
            },
        });
        const json = await response.json();
        if (!response.ok) {
            setError(json.error);
        }

        if (response.ok) {
            setLoad("");
            setReps("");
            setTitle("");
            setError(null);
            console.log("new workout addded", json);
        }
    }
    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new Workout</h3>
            <label>Exercise Title : </label>
            <input
                type="text"
                onChange={(e) => {
                    setTitle(e.target.value);
                }}
                value={title}
            />
            <label>Exercise Load (kg) : </label>
            <input
                type="number"
                onChange={(e) => {
                    setLoad(e.target.value);
                }}
                value={load}
            />
            <label>Exercise Reps : </label>
            <input
                type="number"
                onChange={(e) => {
                    setReps(e.target.value);
                }}
                value={reps}
            />

            <button>Add Workout</button>
            {error && <div className="error">{error}</div>}
        </form>
    );
}
