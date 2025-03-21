import * as React from "react";

const Row = ({children, spacing}) => {
    const childStyle = {
        marginLeft: `${spacing}px`,
    }
    return (
        <div className="Row">
            {React.Children.map(children, (child, index) => {
                return React.cloneElement(child, {
                    style: {
                        ...child.props.style,
                        ...(index > 0 ? childStyle : {}),
                    }
                });
            }
            )}
        </div>
    );
};

function AppLiveOrders(){
    return (
        <div className="App">
            <Row spacing={32}>
                <p>Pizza marg</p>
                <p>2</p>
                <p>305</p>
                <p>18:30</p>
                <p>John</p>
            </Row>
        </div>
    )
}

export default AppLiveOrders;