import React from "react";

const StoreContext = React.createContext(null)


export const Provide = (props) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContext