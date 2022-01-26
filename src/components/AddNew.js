import React, {useContext} from 'react';
import './AddNew.css';
import {useState} from "react";
import {GlobalContext} from "../context/GlobalState";

function AddNew(props) {
    let [description, setDesc] = useState("");
    let [amount, setAmount] = useState(0);
    const {AddThis} = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();
        const AddNew =
            {
                // id: Math.floor(Math.random() * 10000),
                amount: parseInt(amount),
                description: description,
                id: parseInt(Math.floor(Math.random() * 10000))
            }
        console.log(AddNew);
        AddThis(AddNew);

    }


    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className={"enter"}>
                    <label htmlFor="">Description</label>
                    <input type="text" required
                           id={"inputDesc"}
                           placeholder={"Description"}
                           value={description}
                           onChange={(e) => setDesc(e.target.value)}
                    />
                </div>
                <div className={"enter"}>
                    <label htmlFor="">Amount</label>
                    <input type="number" required
                           id={"inputAmount"}
                           placeholder={"Amount"}
                           value={amount}
                           onChange={(e) => setAmount(e.target.value)}
                    />
                </div>
                <button>Add Transaction</button>
            </form>
        </div>
    );
}

export default AddNew;