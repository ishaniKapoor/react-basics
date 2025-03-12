function ModeToggler(){
    let darkModeOn = true;
    const darkMode = <h1>Dark Mode is on</h1>
    const lightMode = <h1>Light Mode is on</h1>
    function handleClick(){
        darkModeOn = !darkModeOn;
        darkModeOn ? console.log("dark is on") :
        console.log("light is on");
    }
    return (
        <div>
            {darkModeOn ? darkMode : lightMode}
            <button onClick={handleClick}>
                Click Me
            </button>
        </div>
    );
};

export default ModeToggler;