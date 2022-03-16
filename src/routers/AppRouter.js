import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';

export const history = createBrowserHistory();


const AppRouter = () => (
    <HistoryRouter history={history}>
        <div>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route
                    path="dashboard"
                    element={
                        <PrivateRoute>
                            <ExpenseDashboardPage />
                        </PrivateRoute>
                    } />
                <Route
                    path="create"
                    element={
                        <PrivateRoute>
                            <AddExpensePage />
                        </PrivateRoute>
                    } />
                <Route
                    path="dashboard/edit/:id"
                    element={
                        <PrivateRoute>
                            <EditExpensePage />
                        </PrivateRoute>
                    } />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>

    </HistoryRouter>
)

export default AppRouter;

//                 <Route path="login" element={<LoginPage />} />