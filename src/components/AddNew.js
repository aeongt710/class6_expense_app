import React, {useContext, createContext} from 'react';
import './AddNew.css';
import {useState} from "react";
import {GlobalContext, GlobalContextIdentity} from "../context/GlobalState";
import IdentityContext from "../context/IdentityContext";

function AddNew(props) {
    let [description, setDesc] = useState("");
    let [amount, setAmount] = useState(0);
    const {AddThis} = useContext(GlobalContext);

    // let asd = useContext(GlobalContextIdentity);

    const onSubmit = e => {
        e.preventDefault();
        const AddNew =
            {
                amount: parseInt(amount),
                description: description
                // id   It will be assigned in AddThis Function
                // id: parseInt(Math.floor(Math.random() * 10000))
                // id: 1
            }
        // setIdentity(++identity);
        // asd[1](++asd[0]);
        AddThis(AddNew);

    }


    return (
        <div>
            <h3>Add New Transaction</h3>
            <br/>
            <div className={"enter"}>

                {/*<div className="group">*/}
                {/*    <input type="text" required/>*/}
                {/*        <span className="highlight"></span>*/}
                {/*        <span className="bar"></span>*/}
                {/*        <label htmlFor={""}>Name</label>*/}
                {/*</div>*/}


                <form onSubmit={onSubmit}>

                    <div className={" group"}>

                        <input type="text" required
                               id={"inputDesc"}
                            // placeholder={"Description"}
                               value={description}
                               onChange={(e) => setDesc(e.target.value)}
                        />
                        <span className={"bar"}></span>
                        <span className={"highlight"}></span>
                        <label htmlFor="" className={""}>Description</label>

                    </div>
                    <div className={"group"}>

                        <input type="number" required
                               id={"inputAmount"}
                            // placeholder={"Amount"}
                               value={amount}
                               onChange={(e) => setAmount(e.target.value)}
                        />
                        <span className={"bar"}></span>
                        <span className={"highlight"}></span>
                        <label htmlFor="">Amount</label>
                    </div>
                    <button className={"btn-add"}>Add Transaction</button>
                </form>
            </div>
        </div>
    );
}

export default AddNew;