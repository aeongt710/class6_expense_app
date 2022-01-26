import React, {createContext, useReducer} from "react";
import AppReducer from "./AppReducer";

const initialState = {
    transactions: [
        {id: 1, description: "First Income", amount: 12},
        {id: 3, description: "third Income", amount: 11},
        {id: 2, description: "third Income", amount: -1}
    ]
}
export const GlobalContext = createContext({initialState});

export const GlobalProvider = ({children}) => {

    const [state,dispatch] =useReducer(AppReducer,initialState);
    function DeleteThis(id){
        dispatch(
            {
                type: "DELETE",
                payload: id
            }
        );
    }
    function AddThis(transaction)
    {
        dispatch(
            {
                type: "ADD",
                payload: transaction
                // id: transaction.id,
                // description: transaction.description,
                // amount: transaction.amount
            }
        );
    }

    return (
        <GlobalContext.Provider
            value={
                {
                    transactions:state.transactions,
                    DeleteThis,
                    AddThis

                }
        }>
            {children}
        </GlobalContext.Provider>
    )
}

