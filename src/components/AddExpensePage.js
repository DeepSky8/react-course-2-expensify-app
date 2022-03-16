import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';
import { useNavigate } from 'react-router-dom';
import { history } from '../routers/AppRouter';

// const AddExpensePage = (props) => {
//     const navigate = useNavigate();
//     return (
//         <div>
//             <h1>Add Expense</h1>
//             <ExpenseForm
//                 onSubmit={(expense) => {
//                     props.dispatch(startAddExpense(expense))
//                     navigate('/dashboard')
//                 }}
//             />
//         </div>
//     )
// }

// export default connect()(AddExpensePage);










export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {

        this.props.startAddExpense(expense);
        history.push('/')
    }
    render() {
        return (
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);