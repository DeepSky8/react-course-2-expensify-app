// Takes an array of Expense objects
// Creates a new array populated by expense.amount integers
// Reduces the array of integers to a single integer, and returns it

export default (expenseArray) => {
    return expenseArray
    .map(expense => expense.amount)
    .reduce((sum, value) => sum + value, 0);
};
