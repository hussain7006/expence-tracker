import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {

    const {transactions} = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc,item) => (acc+= item), 0).toFixed(2);

    return (
        <div>
            <h2 className="current_balance">
                Current Balance
            </h2>
            <h1 className="current_balance_amount"> ${total} </h1>
        </div>
    )
}

export default Balance
