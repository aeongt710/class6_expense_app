import React, {useContext} from 'react';
import './HistoryCSS.css';
import {GlobalContext} from "../context/GlobalState";
import {Trans} from "./Trans";

function History(props) {
    const {transactions} = useContext(GlobalContext);
    return (
        <div className={"main"}>
            <h3>Transaction History</h3>
            <hr/>
            <ul>
                {transactions.map(transaction =>
                    <Trans key={transaction.id} transaction={transaction}/>
                )}
            </ul>
        </div>
    );
}

export default History;