import { useState } from "react";

export default function UseStateObject(){
    const [greeting, setGreeting] = useState({greet: "hello, world!", place: "Lisbon"});

    function updateGreeting(){
        setGreeting(prevState => {
            return {...prevState, place: "World-Wide-Web"};
        })
    }

    return (
        <div>
            <h1>
                {greeting.greet}, {greeting.place}
            </h1>
            <button onClick={updateGreeting}>
                Update greeting
            </button>
        </div>
    );
};