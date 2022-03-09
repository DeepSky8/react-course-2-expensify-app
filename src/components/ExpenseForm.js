import React from 'react';
import moment from 'moment';

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt).format("yyyy-MM-DD") : moment().format("yyyy-MM-DD"),
            calendarFocused: false,
            error: props.error ? props.error : ''
        };
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }))
    }
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }))
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
    }
    onDateChange = (e) => {
        const createdAt = e.target.value;
        this.setState(() => ({ createdAt }));

    }
    // onFocusChange = ({ focused }) => {

    //     this.setState(() => { calendarFocused: focused })
    // }
    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'Please provide description and amount' }))
        } else {
            this.setState(() => ({ error: '' }))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <label htmlFor='description'>Description
                        <input
                            id='description'
                            name='description'
                            type="text"
                            placeholder="Required"
                            autoFocus
                            value={this.state.description}
                            onChange={(this.onDescriptionChange)}
                        />
                    </label>
                    <label htmlFor='amount'>Amount
                        <input
                            id='amount'
                            name='amount'
                            type="text"
                            placeholder="Required in numbers"
                            value={this.state.amount}
                            onChange={this.onAmountChange}
                        />
                    </label>
                    <label htmlFor='date'>Date
                        <input
                            id='date'
                            name='date'
                            type="date"
                            value={this.state.createdAt}
                            onChange={this.onDateChange}
                        />
                    </label>
                    <label htmlFor='note'>Note (optional)
                        <textarea
                            id='note'
                            name='note'
                            placeholder="Add a note for your expense (optional)"
                            value={this.state.note}
                            onChange={this.onNoteChange}
                        >
                        </textarea>
                    </label>
                    <button>Save Expense</button>
                </form>
            </div>
        )
    }
}
