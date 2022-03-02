// Take an array, counts the length
// use expenses-total to get the amount totals from array objects
// Return object with arrayLength and arrayTotal
import expensesTotal from "./expenses-total";

export default (expenseArray) => {
    const arrayLength = expenseArray.length;
    const arrayTotal = expensesTotal(expenseArray)
    return ({ arrayLength, arrayTotal })
}