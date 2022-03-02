import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import { NotFoundPage } from '../../components/NotFoundPage';

test('should display the 404 page', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<NotFoundPage />)
    expect(renderer.getRenderOutput()).toMatchSnapshot();
})