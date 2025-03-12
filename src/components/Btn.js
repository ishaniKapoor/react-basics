function Btn(){
    const clickHandler = () => console.log('mouseOver');
    return (
        <button onClick={() => 
            {console.log('first example')}}>
                An inline anonymous ES5 function event handler
            </button>
    );
};

export default Btn;