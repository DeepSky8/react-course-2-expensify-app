import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';
import { useNavigate } from 'react-router-dom';
import { history } from '../routers/AppRouter';





export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {

        this.props.startAddExpense(expense);
        history.push('/')
    }
    render() {
        return (
            <div>
                <div className='page-header'>
                    <div className='content-container'>
                        <h1 className='page-header__title'>Add Expense</h1>
                    </div>
                </div>
                <div className='content-container'>
                    <ExpenseForm
                        onSubmit={this.onSubmit}
                    />
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);



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