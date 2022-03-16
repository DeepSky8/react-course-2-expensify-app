import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
    addExpense,
    startAddExpense,
    editExpense,
    startEditExpense,
    removeExpense,
    startRemoveExpense,
    setExpenses,
    startSetExpenses,
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import db from '../../firebase/firebase';
import { get, ref, set } from 'firebase/database';

const createMockStore = configureMockStore([thunk]);



beforeEach((done) => {
    const expensesData = {}
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt }
    })

    set(ref(db, 'expenses'), expensesData).then(() => done());
})





test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should use startRemoveExpense to add action to store with ID to remove', (done) => {
    const store = createMockStore({})
    const id = expenses[2].id;
    store.dispatch(startRemoveExpense({ id }))
        .then(() => {
            const actions = store.getActions();
            expect(actions[0])
                .toEqual({
                    type: 'REMOVE_EXPENSE',
                    id
                });
            return get(ref(db, `expenses/${id}`))
        })
        .then((dataSnapshot) => {
            expect(dataSnapshot.val()).toBeFalsy();
            done();
        })
        .catch((error) => {
            console.log('Error: ', error)
        })

})

test('should edit elements of an expense', () => {
    const action = editExpense('123abc', { note: 'new note value' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: { note: 'new note value' }
    })
})

test('should edit expense from firebase', (done) => {
    const store = createMockStore({});
    const id = expenses[1].id
    const updates = {
        amount: 21045
    }
    store.dispatch(startEditExpense(id, updates))
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'EDIT_EXPENSE',
                id,
                updates
            })
            return get(ref(db, `expenses/${id}`))
        })
        .then((snapShot) => {
            expect(snapShot.val().amount).toBe(updates.amount)
            done();
        })
        .catch((error) => {
            console.log('Error: ', error)
        })
})

test('should add new expense with provided values', () => {
    const action = addExpense(expenses[2])
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
})

test('should add expense to database and store', (done) => {
    const store = createMockStore({})
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'This one is better',
        createdAt: 1000
    }
    store.dispatch(startAddExpense(expenseData))
        .then(() => {
            const actions = store.getActions();
            expect(actions[0])
                .toEqual({
                    type: 'ADD_EXPENSE',
                    expense: {
                        id: expect.any(String),
                        ...expenseData
                    }
                });
            return get(ref(db, `expenses/${actions[0].expense.id}`))
        })
        .then((snapShot) => {
            expect(snapShot.val())
                .toEqual(expenseData)
            done();
        })
        .catch((e) => {
            console.log('Error occurred: ', e)
        });
})

test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore({})
    const expenseDefaults = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    }
    store.dispatch(startAddExpense({}))
        .then(() => {
            const actions = store.getActions();
            expect(actions[0])
                .toEqual({
                    type: 'ADD_EXPENSE',
                    expense: {
                        id: expect.any(String),
                        ...expenseDefaults
                    }
                });
            return get(ref(db, `expenses/${actions[0].expense.id}`))
        })
        .then((snapShot) => {
            expect(snapShot.val())
                .toEqual(expenseDefaults)
            done();
        })
        .catch((e) => {
            console.log('Error occurred: ', e)
        });
})


test('should setup set expense action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
})

test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore({});
    store.dispatch(startSetExpenses())
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'SET_EXPENSES',
                expenses
            })
            done();
        })
})

