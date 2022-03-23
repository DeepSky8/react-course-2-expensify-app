import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import LoadingPage from '../../components/LoadingPage';

test('should render Loading page correctly', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<LoadingPage />)
    expect(renderer.getRenderOutput()).toMatchSnapshot();
})