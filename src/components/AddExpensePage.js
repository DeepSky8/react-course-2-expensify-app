import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';
import { useNavigate } from 'react-router-dom';

const AddExpensePage = (props) => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Add Expense</h1>
            <ExpenseForm
                onSubmit={(expense) => {
                    props.dispatch(startAddExpense(expense))
                    navigate('/')
                }}
            />
        </div>
    )
}

export default connect()(AddExpensePage);










// export class AddExpensePage extends React.Component {
//     onSubmit = (expense) => {
        
//         this.props.addExpense(expense);
//         navigate('/')
//     }
//     render() {
//         return (
//             <div>
//                 <h1>Add Expense</h1>
//                 <ExpenseForm
//                     onSubmit={this.onSubmit}
//                 />
//             </div>
//         )
//     }
// }


// const mapDispatchToProps = (dispatch) => ({
//     addExpense: (expense) => dispatch(addExpense(expense))
// });

// export default connect(undefined, mapDispatchToProps)(AddExpensePage);