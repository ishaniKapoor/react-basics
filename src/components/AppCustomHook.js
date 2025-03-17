import { useEffect, useState } from "react";

function useConsoleLog(varName) {
    useEffect(() => {
        console.log(varName);
    }, [varName]);
}
function AppCustomHook() {
    const [count, setCount] = useState(0);
    useConsoleLog(count);
    function increment(){
        setCount(prevCount => prevCount + 1);
    }
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Plus 1</button>
        </div>
    );
};

export default AppCustomHook;