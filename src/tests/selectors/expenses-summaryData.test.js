import expensesSummaryData from "../../selectors/expenses-summaryData";
import expenses from '../../tests/fixtures/expenses';

test('should accept expense array, return object with length and amount total', () => {
    const result = expensesSummaryData(expenses);
    expect(result).toEqual({
        arrayLength: 3,
        arrayTotal: 114195
    })
})