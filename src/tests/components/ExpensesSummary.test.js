import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should display number and total of expenses to be 3, 1141.95', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<ExpensesSummary expenseCount={3} expensesTotal={114195} />)
    expect(renderer.getRenderOutput()).toMatchSnapshot();
 })

 test('should display number and total of expenses to be 0, 0', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<ExpensesSummary expenseCount={0} expensesTotal={0} />)
    expect(renderer.getRenderOutput()).toMatchSnapshot();
 })

 test('should display number and total of expenses to be 1, 1.95', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<ExpensesSummary expenseCount={1} expensesTotal={195} />)
    expect(renderer.getRenderOutput()).toMatchSnapshot();
 })