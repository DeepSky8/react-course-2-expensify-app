import expenses from "../fixtures/expenses";
import selectExpensesTotal from '../../selectors/selectExpensesTotal'

test('should add together expense amounts from array objects', () => {
    const result = selectExpensesTotal(expenses)
    expect(result).toBe(114195)
})

test('should return 0 if no expenses', () => {
    const emptyArray = []
    const result = selectExpensesTotal(emptyArray)
    expect(result).toBe(0)
})

test('should add up a single expense', () => {
    const singleExpense = [expenses[0]]
    const result = selectExpensesTotal(singleExpense)
    expect(result).toBe(195)
})