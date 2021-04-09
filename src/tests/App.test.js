import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

describe('App component', () => {
    test('it renders a table', () => {
        const { debug, container } = render(<App />)

        debug()

        expect(container.firstChild.nodeName).toBe('DIV')
    })
})
