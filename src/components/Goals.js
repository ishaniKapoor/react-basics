import React from "react";

function GoalForm(props){
    const [ formData, setFormData] = React.useState({goal: "", by: ""});

    function changeHandler(e) {
        setFormData({...formData, [e.target.name]: e.target.value });
    }

    function submitHandler(e){
        e.preventDefault();
        props.onAdd(formData);
        setFormData({goal: "", by: ""});
    };

    return (
        <>
            <h1>My Little Lemon Goals</h1>
            <form onSubmit={submitHandler}>
                <input type="text" name="goal" placeholder="Goal" value={formData.goal} onChange={changeHandler}/>
                <input type="text" name="by" placeholder="By..." value={formData.by} onChange={changeHandler}/>
                <button>Submit Goal</button>
            </form>
        </>
    );
};

function ListOfGoals(props){
    return (
        <ul>
            {props.allGoals.map((gl) => {
                return <li key={gl.goal}>
                    <span>My goal is to {gl.goal}, by {gl.by}</span>
                </li>
            })}
        </ul>
    );
};

export default function Goals(){
    const [allGoals, updateAllGoals] = React.useState([]);

    function addGoal(goal) {
        updateAllGoals([...allGoals, goal]);
    }

    return (
        <div className="Goals">
            <GoalForm onAdd={addGoal} />
            <ListOfGoals allGoals={allGoals} />
        </div>
    )
}