import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render ExpenseForm correctly', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<ExpenseForm />)
    expect(renderer.getRenderOutput()).toMatchSnapshot();
})

test('should render ExpenseForm with expense data', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<ExpenseForm expense={expenses[0]} />)
    expect(renderer.getRenderOutput()).toMatchSnapshot();
})