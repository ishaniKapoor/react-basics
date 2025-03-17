import React from "react";

function AppUseRef(){
    const formInputRef = React.useRef(null);
    const focusInput = () => {
        formInputRef.current.focus();
    }
    return (
        <>
        <h1>Using useref to access underlying DOM</h1>
        <input type="text">
        <button onClick={focusInput}>
        focus my input
        </button>
        </input>
        </>
    );
};

export default AppUseRef;