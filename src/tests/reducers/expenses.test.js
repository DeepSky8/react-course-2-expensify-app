import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const id = '2'
    const action = {
        type: 'REMOVE_EXPENSE',
        id
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
})

test('should add an expense', () => {
    const expense = {
        id: '4',
        description: 'Bubbles',
        note: '',
        amount: 50,
        createdAt: 0
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense])
})

test('should edit an expense', () => {
    const description = 'BubbleGum'
    const updates = {
        description
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates
    }
    const state = expensesReducer(expenses, action);
    expect(state[0].description).toBe('BubbleGum');
})

test('should not edit an expense if id not found', () => {
    const description = 'BubbleGum'
    const updates = {
        description
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: 7,
        updates
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
})

// Checking that the previous expense is 
// overwritten with new expenses using SET_EXPENSES reducer
test('should set (overwrite) expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    }
    const state = expensesReducer(expenses,action)
    expect(state).toEqual([expenses[1]])
})