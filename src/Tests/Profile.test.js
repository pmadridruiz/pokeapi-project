import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react'
import Profile from '../Components/Tools/Profile';
import { MemoryRouter } from "react-router-dom";

describe('Unit testing de Profile', () => {

    it('Debería renderizar el componente Profile...', () => {
        render(<MemoryRouter>
            <Profile />
        </MemoryRouter>);
        const rendered = renderer.create(<MemoryRouter><Profile /></MemoryRouter>)
        expect(rendered).toBeTruthy()

    })

})