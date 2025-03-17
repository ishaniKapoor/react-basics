import { useEffect, useState } from "react";

const DataFetcher = ({render, url}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        if (url.includes("desserts")){
            setData(["cake", "ice-cream", "pie", "brownie"]);
        } else {
            setData(["water", "soda", "juice"]);
        }
    }, []);
    return render(data);
};

const DessertCount = () => {
    return (
        <DataFetcher url="https://littlelemon/desserts"
        render={(data) => <p>{data.length} desserts</p>}
        />
    );
};

const DrinksCount = () => {
    return (
        <DataFetcher url="https://littlelemon/drinks"
        render={(data) => <p>{data.length} drinks</p>}
        />
    );
};

function AppRenderProps() {
    return (
        <div className="App">
            <header>Little Lemy</header>
            <DessertCount />
            <DrinksCount />
        </div>
    );
};

export default AppRenderProps;
