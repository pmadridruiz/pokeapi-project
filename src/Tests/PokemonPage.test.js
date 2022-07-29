import renderer from 'react-test-renderer';
import { render } from '@testing-library/react'
import PokemonPage from '../Components/PokemonPage/PokemonPage'
import { MemoryRouter } from "react-router-dom";

describe('Unit testing de PokemonPage', () => {

    it('Debería renderizar el componente PokemonPage...', () => {
        render(<MemoryRouter>
            <PokemonPage />
        </MemoryRouter>);
        const rendered = renderer.create(<MemoryRouter><PokemonPage /></MemoryRouter>)
        expect(rendered).toBeTruthy()

    })

})
