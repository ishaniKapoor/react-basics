import { useState } from "react";

export default function UseState(){
    const [restaurantName, setRestaurantName] = useState("Lemon"); //initial value
    function updateRestaurantName(){
        setRestaurantName("Little Lemon");
    }
    return (
        <div>
            <h1>{restaurantName}</h1>
            <button onClick={updateRestaurantName}>
                Update restaurant name
            </button>
        </div>
    );
};