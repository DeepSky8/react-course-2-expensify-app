import React from 'react';
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExpense } from '../actions/expenses'
import ExpenseForm from './ExpenseForm';
import { useNavigate } from 'react-router-dom';
import { history } from '../routers/AppRouter';



const EditExpensePage = (props) => {
    const navigate = useNavigate();
    return (
        <div>
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    props.dispatch(startEditExpense(props.expense.id, expense))
                    navigate('/dashboard')
                }} />
            <button onClick={() => {
                props.dispatch(startRemoveExpense({ id: props.expense.id }))
                navigate('/dashboard')
            }}>Remove Expense</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    const params = { id: history.location.pathname.split("/")[3] };
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === params.id
        })
    }
}

export default connect(mapStateToProps)(EditExpensePage);

// Alternate method of accessing location, if History goes out of vogue again:
// window.location.pathname.split("/")[2]