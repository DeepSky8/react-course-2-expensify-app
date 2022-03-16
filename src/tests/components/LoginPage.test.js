import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import { LoginPage } from '../../components/LoginPage';

test('should render Login page correctly', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<LoginPage />)
    expect(renderer.getRenderOutput()).toMatchSnapshot();
})