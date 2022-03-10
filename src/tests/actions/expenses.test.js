import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
    startAddExpense,
    addExpense,
    removeExpense,
    editExpense,
    setExpenses,
    startSetExpenses
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import { db } from '../../firebase/firebase';
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

test('should edit elements of an expense', () => {
    const action = editExpense('123abc', { note: 'new note value' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: { note: 'new note value' }
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
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        })
        done();
    })

})


// const action = addExpense()
// expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//         id: expect.any(String),
//         description: '',
//         note: '',
//         createdAt: 0,
//         amount: 0
//     }
// })