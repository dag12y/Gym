import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

export default function WorkoutDetails({ workout }) {
    const {dispatch}=useWorkoutsContext()

    async function handleClick(params) {
        const response =await fetch('/api/workouts/'+workout._id,{
            method:"DELETE",
        })

        const json=await response.json()

        if(response.ok){
            dispatch({type:"DELETE_WORKOUT",payload:json})
        }
        
    }

    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p>
                <strong>Load (kg): </strong>
                {workout.load}
            </p>
            <p>
                <strong>Reps: </strong>
                {workout.reps}
            </p>
            <p>{formatDistanceToNow(new Date(workout.createdAt),{addSuffix:true})}</p>
            <span onClick={handleClick} className='material-symbols-outlined'>delete</span>
        </div>
    );
}
