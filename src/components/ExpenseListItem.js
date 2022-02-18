import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        <nav>
            <Link to={`edit/${id}`}>
                <h3>{description}</h3>
            </Link>
        </nav>

        <p>Amount: {amount}</p>
        <p>Created: {createdAt}</p>
    </div>
)


export default ExpenseListItem;