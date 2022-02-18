import { addExpense, removeExpense, editExpense } from '../../actions/expenses';
import { v4 as uuidv4 } from 'uuid';

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
    const expenseData = {
        description: 'Rent',
        note: 'expensive',
        createdAt: 9000,
        amount: 9000
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('should add new expense with default values', () => {
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            createdAt: 0,
            amount: 0
        }
    })
})