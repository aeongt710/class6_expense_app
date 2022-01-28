import React,{useContext} from 'react';
import {GlobalContext} from "../context/GlobalState";
import './Trans.css';


export const Trans=({transaction})=>{

    const {DeleteThis}=useContext(GlobalContext);
    if(transaction.amount>0)
        return (
        <div>
            <li className={"plus"}  >
                {transaction.description}
                <span style={{textAlign: "left"}} className={"data"}>+${transaction.amount}</span>
                <button className={"del"} style={{borderRadius: "10px", border: "none"}} onClick={()=>DeleteThis(transaction.id)}>X</button>
            </li>
        </div>
    )
    else if(transaction.amount<0)
        return (
        <div>
            <li className={"minus"} >
                {transaction.description}
                <span style={{textAlign: "left"}} className={"data"}>-${Math.abs(transaction.amount)}</span>
                <button className={"del"} style={{borderRadius: "10px", border: "none"}} onClick={()=>DeleteThis(transaction.id)}>X</button>
            </li>
        </div>
    )
    else
        return (
            <div></div>
        )
};