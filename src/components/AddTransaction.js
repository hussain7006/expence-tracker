import React,{useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {

    const [text,setText] = useState('');
    const [amount,setAmount] = useState(0);

    const {addTransaction} =  useContext(GlobalContext)

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount 
        }

        addTransaction(newTransaction);
    }


    return (
        <div>
            <h3>Add New Transaction</h3>

            <form onSubmit = {onSubmit}>
                <div className="form-control">
                    <label htmlFor="description">
                        Description
                    </label>
                    <input  type="text" 
                            id="description"
                            placeholder="Detail of Transaction"
                            value = {text}
                            onChange = {(e) => setText(e.target.value)}
                    >
                    </input>
                    
                </div>
                <div className="form-control">
                    <label htmlFor="transactionamount">
                        Transaction Amount
                        <h6>(For_expence: (-) sign)  -----  (For_income:  (+) sign)
                        </h6>

                    </label>
                    <input  type="number"
                            id="transactionamount"
                            placeholder="Enter Transaction Amount"
                            value = {amount}
                            onChange = {(e) => setAmount(e.target.value)}
                    >
                    </input>

                </div>
                <button className="btn">
                    Add Transaction
                </button>
            </form>
        </div>
    )
}

export default AddTransaction
