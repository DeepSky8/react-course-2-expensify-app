import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses'
import numeral from 'numeral';
import expensesSummaryData from '../selectors/expenses-summaryData';

const ExpensesSummary = (props) => {
    const summaryData = expensesSummaryData(props.expenses);
    const arrayLength = summaryData.arrayLength.toString();
    const arrayTotal = numeral(summaryData.arrayTotal / 100).format('$0,0.00');
    const plural = arrayLength === 1 ? '' : 's';

    return (
        <div>
            <p>
                {
                    `Viewing ${arrayLength} 
                expense${plural} 
                totalling ${arrayTotal}`
                }
            </p>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
};

export default connect(mapStateToProps)(ExpensesSummary)