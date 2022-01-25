import React from 'react';
import './AddNew.css';
import {useState} from "react";

function AddNew(props) {
    let [getDesc,setDesc]=useState("");
    let [getAmount,setAmount]=useState(0);
    return (
        <div>
            <h3>Add New Transaction</h3>
            <form >
                <div className={"enter"}>
                    <label htmlFor="">Description</label>
                    <input type="text"
                           id={"inputDesc"}
                           placeholder={"Description"}
                           value={getDesc}
                           onChange={(e) => setDesc(e.target.value)}
                    />
                </div>
                <div className={"enter"}>
                    <label htmlFor="">Amount</label>
                    <input type="number"
                           id={"inputAmount"}
                           placeholder={"Amount"}
                           value={getAmount}
                           onChange={(e)=>setAmount(e.target.value)}
                    />
                </div>
                <button>Add Transaction</button>
            </form>
        </div>
    );
}

export default AddNew;