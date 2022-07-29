import renderer from 'react-test-renderer';
import { render } from '@testing-library/react'
import Batalla from '../Components/Batalla/Batalla'
import { MemoryRouter } from "react-router-dom";

describe('Unit testing de Batalla', () => {

    it('Debería renderizar el componente Batalla...', () => {
        render(<MemoryRouter>
            <Batalla />
        </MemoryRouter>);
        const rendered = renderer.create(<MemoryRouter><Batalla /></MemoryRouter>)
        expect(rendered).toBeTruthy()

    })
})