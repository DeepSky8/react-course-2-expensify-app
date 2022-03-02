import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import ExpenseForm from '../../components/ExpenseForm';

test('should render ExpenseForm correctly', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<ExpenseForm />)
    expect(renderer.getRenderOutput()).toMatchSnapshot();
})