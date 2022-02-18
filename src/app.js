import './components/polyfills';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store = configureStore();

store.dispatch(addExpense({ description: 'Water Bill', amount: 4500, createdAt: 9000 }))
store.dispatch(addExpense({ description: 'Gas Bill', amount: 3000, createdAt: 8050 }))
store.dispatch(addExpense({ description: 'Rent', amount: 70000, createdAt: 3000 }))

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

