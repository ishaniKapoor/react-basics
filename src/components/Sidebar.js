function Sidebar(props){
    const asideStyle =  {
        background: "azure",
        width: "calc(30% - 10px)",
        marginLeft: "10px",
    }
    return(
        <aside 
        style={asideStyle}
        className="sidebar-component">
            <h1>{props.greet} from Sidebar!</h1>
        </aside>
    );
};

export default Sidebar;