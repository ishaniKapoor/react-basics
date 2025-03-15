import { useEffect } from "react";

function ShoppingCart(props){
    const total = props.count * props.price;

    useEffect(() => console.log(total), [])

    return <h1>Total: {total}</h1>
}