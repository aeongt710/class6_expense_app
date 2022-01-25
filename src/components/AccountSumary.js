import React from 'react';
import './AcountSumary.css';

function AccountSumary(props) {
    return (
        <div>
            <div className={"Row"}>
                <div className={"Column"}>
                    <h4>INCOME</h4>
                    <p className={"income"}>$0.00</p>
                </div>
                <div className={"Column"}>
                    <h4>EXPENSE</h4>
                    <p className={"expense"}>$0.00</p>
                </div>
                <br/>
            </div>
        </div>
    );
}

export default AccountSumary;