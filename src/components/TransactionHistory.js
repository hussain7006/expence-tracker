import React, {useContext} from 'react';
import Transactions from './Transactions';

// import the Global Context
import { GlobalContext } from '../context/GlobalState';

const TransactionHistory = () => {

    const {transactions} = useContext(GlobalContext);

    // console.log(transactions)

    return (
        <div>
            <h3>Transaction History</h3>
            <ul className="list">
                {transactions.map(transaction => 
                    <Transactions key = {transaction.id} transaction = {transaction} />
                    )
                }
                
            </ul>
        </div>
    )
}

export default TransactionHistory
