import React from 'react';
import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import Greet from '../components/Greet';

describe('Greet komponenta', () => {
    it('Ispisuje se ime kada je dato', () => {
        render(<Greet name='Uros'/>);
        const heading = screen.getByRole('heading');

        expect(heading).toHaveTextContent(/uros/i);
    })
})