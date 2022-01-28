import React, {createContext, useContext, useReducer} from "react";
import AppReducer from "./AppReducer";
import IdentityContext from "./IdentityContext";

const initialState = {
    transactions: [
        // {id: 1, description: "First Income", amount: 12},
        // {id: 3, description: "third Income", amount: 11},
        // {id: 2, description: "third Income", amount: -1}
    ]
};
let Identity = 0;

export const GlobalContext = createContext({initialState});
export const GlobalContextIdentity= createContext(Identity);

export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    let getID = useContext(IdentityContext);

    function DeleteThis(id) {
        dispatch(
            {
                type: "DELETE",
                payload: id
            }
        );
    }

    function AddThis(transaction) {
        ++Identity;
        transaction.id=Identity;
        dispatch(
            {
                type: "ADD",
                payload: transaction
            }
        );
    }

    return (
        <GlobalContext.Provider
            value={
                {
                    transactions: state.transactions,
                    DeleteThis,
                    AddThis

                }
            }>
            {children}
        </GlobalContext.Provider>
    )
}

