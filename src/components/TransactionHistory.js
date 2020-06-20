import React from 'react'

const TransactionHistory = () => {
    return (
        <div>
            <h3>Transaction History</h3>
            <ul className="list">
                <li className="plus">
                    Project 1 income
                    <span>$1,000</span>
                    <button className="delete-btn">X</button>
                </li>
                <li className="minus">
                    Project 1 Salary
                    <span>-$500</span>
                    <button className="delete-btn">X</button>
                </li>
            </ul>
        </div>
    )
}

export default TransactionHistory
