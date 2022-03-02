import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';

test('should display Expense Dashboard with no items', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<ExpenseDashboardPage />)
    expect(renderer.getRenderOutput()).toMatchSnapshot();
})