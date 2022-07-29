import renderer from 'react-test-renderer';
import { render } from '@testing-library/react'
import Pokedex from '../Components/Pokedex/Pokedex'
import { MemoryRouter } from "react-router-dom";

describe('Unit testing de Pokedex', () => {

    it('Debería renderizar el componente Pokedex...', () => {
        render(<MemoryRouter>
            <Pokedex />
        </MemoryRouter>);
        const rendered = renderer.create(<MemoryRouter><Pokedex /></MemoryRouter>)
        expect(rendered).toBeTruthy()

    })

})
