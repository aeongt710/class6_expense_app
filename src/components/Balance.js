import React, {useContext} from 'react';
import {GlobalContext} from "../context/GlobalState";
import {useState} from "react";

function Balance(props) {
    const {transactions} = useContext(GlobalContext);
    console.log("BALANCE");
    console.log(transactions);
    const am = transactions.map(trans => trans.amount);
    const sum = am.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <div>
            <h2>Current Balance</h2>
            <h1>${sum}</h1>
        </div>
    );
}

export default Balance;