import { db } from '../firebase/firebase';
import { get, push, ref } from 'firebase/database';

export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
})
export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData
        const expense = { description, note, amount, createdAt }

        return push(ref(db, 'expenses'), expense)
            .then((ref) => {
                dispatch(addExpense({
                    id: ref.key,
                    ...expense
                }))
            })
            .catch((e) => { })
    }
}

export const removeExpense = ({ id } = {}) => (
    {
        type: 'REMOVE_EXPENSE',
        id
    });

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

export const startSetExpenses = () => {
    return (dispatch) => {
        return get(ref(db, 'expenses'))
            .then((dataSnapshot) => {
                const expenses = [];
                dataSnapshot.forEach((childSnapShot) => {
                    expenses.push({
                        id: childSnapShot.key,
                        ...childSnapShot.val()
                    })
                })
                dispatch(setExpenses(expenses))
            }).catch((error) => {
                console.log('Error: ', error)
            });
    }
};



