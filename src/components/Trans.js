import React,{useContext} from 'react';
import {GlobalContext} from "../context/GlobalState";



export const Trans=({transaction})=>{

    const {DeleteThis}=useContext(GlobalContext);
    if(transaction.amount>0)
        return (
        <div>
            <li className={"plus"}  >
                {transaction.description}
                <span style={{textAlign: "left"}}>+${transaction.amount}</span>
                <button onClick={()=>DeleteThis(transaction.id)}>X</button>
            </li>
        </div>
    )
    else return (
        <div>
            <li className={"minus"} >
                {transaction.description}
                <span style={{textAlign: "left"}}>-${Math.abs(transaction.amount)}</span>
                <button onClick={()=>DeleteThis(transaction.id)}>X</button>
            </li>
        </div>
    )
};