import { useState , useEffect} from "react";
const withMousePosition = (WrappedComponent) => {
    return (props) => {
        const [mousePosition, setMousePosition] = useState({
            x: 0, y: 0,
        })
        useEffect(() => {
            const handleMousePositionChange = (e) => {
                setMousePosition({
                    x: e.clientX,
                    y: e.clientY,
                });
            };
            window.addEventListener("mousemove", handleMousePositionChange);

            return () => {
                window.removeEventListener("mousemove", handleMousePositionChange);
            }
        }, []);
        return <WrappedComponent {...props} mousePosition={mousePosition} />;
    };
};

const PanelMouseLogger = ({mousePosition}) => {
    if (!mousePosition){
        return null;
    }
    return (
        <div className="BasicTracker">
            <p>Mouse position:</p>
            <div className="row">
                <span>x: {mousePosition.x}</span>
                <span>y: {mousePosition.y}</span>
            </div>
        </div>
    );
};

const PointMouseLogger = ({mousePosition}) => {
    if (!mousePosition) {
        return null;
    }
    return (
        <p>
            ({mousePosition.x}, {mousePosition.y})
        </p>
    );
}

const PanelMouseTracker = withMousePosition(PanelMouseLogger);
const PointMouseTracker = withMousePosition(PointMouseLogger);

function AppHOC() {
    return (
        <div className="App">
            <header className="Header">Little Lemon</header>
            <PanelMouseTracker />
            <PointMouseTracker />
        </div>
    );
};

export default AppHOC;