import React, {useContext} from 'react';
import './HistoryCSS.css';
import {GlobalContext} from "../context/GlobalState";
import {Trans} from "./Trans";

function History(props) {
    const {transactions} = useContext(GlobalContext);
    // transactions.map(transacti=>(console.log(transacti)));
    transactions && transactions.map(item => {
          console.log(transactions)
        });
    console.log(transactions.length);
    return (
        <div className={"main"}>
            <h3>Transaction History</h3>
            <ul>
                {transactions&&transactions.map(transaction =>
                    <Trans transaction={transactions}/>
                )}

            </ul>
        </div>
    );
}

export default History;

{/*<li className={"plus"}>*/
}
{/*    project 1*/
}
{/*    <span style={{textAlign:"left"}}>$50</span>*/
}
{/*</li>*/
}

{/*<li className={"minus"}>*/
}
{/*    project 2*/
}
{/*    <span>$50</span>*/
}
{/*</li>*/
}