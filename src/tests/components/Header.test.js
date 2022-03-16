import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
import { Header } from '../../components/Header';

import ReactShallowRenderer from 'react-test-renderer/shallow';

test('should render Header correctly', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<Header startLogout={() => { }} />)
    expect(renderer.getRenderOutput()).toMatchSnapshot();
})

// test('should call startLogout on button click', () => {
//     const startLogout = jest.fn()
//     const wrapper = shallow(<Header startLogout={startLogout} />)
//     wrapper.find('button').simulate('click');
//     expect(startLogout).toHaveBeenCalled;
// })






// getByRole(<Header startLogout={startLogout} />,'button')