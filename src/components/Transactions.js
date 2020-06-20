import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

function Transactions({ transaction }) {
    // console.log(transaction)
    const {deleteTransaction} = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';
    return (
        <li className={sign === '+' ? "plus" : "minus"}>
        {transaction.text}
        <span>{sign}${Math.abs(transaction.amount)}</span>
        <button className="delete-btn"
                onClick = {() => deleteTransaction(transaction.id)}
        >X</button>
    </li>
    )
}

export default Transactions;
