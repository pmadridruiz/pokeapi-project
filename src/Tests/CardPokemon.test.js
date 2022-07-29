import renderer from 'react-test-renderer';
import { render } from '@testing-library/react'
import CardPokemon from '../Components/Card/CardPokemon'
import { MemoryRouter } from "react-router-dom";

describe('Unit testing de CardPokemon', () => {

    it('Debería renderizar el componente CardPokemon...', () => {
        render(<MemoryRouter>
            <CardPokemon />
        </MemoryRouter>);
        const rendered = renderer.create(<MemoryRouter><CardPokemon /></MemoryRouter>)
        expect(rendered).toBeTruthy()

    })

})

// Error de test:
// TypeError: Cannot read properties of undefined (reading 'map')