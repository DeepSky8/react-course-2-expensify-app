import React from 'react';
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExpense } from '../actions/expenses'
import ExpenseForm from './ExpenseForm';
import { useNavigate } from 'react-router-dom';



const EditExpensePage = (props) => {
    const navigate = useNavigate();
    return (
        <div>
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    props.dispatch(startEditExpense(props.expense.id, expense))
                    navigate('/')
                }} />
            <button onClick={() => {
                props.dispatch(startRemoveExpense({ id: props.expense.id }))
                navigate('/')
            }}>Remove Expense</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    const params = { id: window.location.pathname.split("/")[2] };
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === params.id
        })
    }
}

export default connect(mapStateToProps)(EditExpensePage);

