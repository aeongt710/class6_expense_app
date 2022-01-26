import React, {useContext} from 'react';
import './AcountSumary.css';
import {GlobalContext} from "../context/GlobalState";

function AccountSumary(props) {
    const {transactions} = useContext(GlobalContext);
    const am = transactions.map(trans => trans.amount);
    const income = am.filter(a=>a>0).reduce((acc, item) => (acc += item),0).toFixed(2);
    const expense = am.filter(a=>a<0).reduce((acc, item) => (acc += item),0).toFixed(2);
    return (
        <div>
            <div className={"Row"}>
                <div className={"ColumnIncome"}>
                    <h4>INCOME</h4>
                    <p className={"income"}>${Math.abs(income)}</p>
                </div>
                <div className={"ColumnExpense"}>
                    <h4>EXPENSE</h4>
                    <p className={"expense"}>${Math.abs(expense)}</p>
                </div>
                <br/>
            </div>
        </div>
    );
}

export default AccountSumary;