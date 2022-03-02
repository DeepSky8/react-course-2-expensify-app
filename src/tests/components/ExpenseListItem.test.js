import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('should render ExpenseListItem with an expense', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<ExpenseListItem {...expenses[0]} />)
    expect(renderer.getRenderOutput()).toMatchSnapshot();
})