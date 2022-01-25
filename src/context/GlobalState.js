import React, {createContext, useReducer} from "react";
import AppReducer from "./AppReducer";

const initialState = {
    transaction: [
        {id: 1, description: "First Income", amount: 0},
        {id: 3, description: "third Income", amount: 123}
    ]
}
export const GlobalContext = createContext({initialState});

export const GlobalProvider = ({children}) => {
    const [state,dispatch] =useReducer(AppReducer,initialState);
    return (
        <GlobalContext.Provider
            value={ initialState.transaction}>
            {children}
        </GlobalContext.Provider>
    )
}