import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react'
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

    it('Debería renderizar el nombre del pokemón en la carta...', () => {
        render(<MemoryRouter>
            <CardPokemon />
        </MemoryRouter>);
        const pokedexCardPokename = screen.getByTestId('pokedex-card-pokeName')
        expect(pokedexCardPokename).toBeTruthy()

    })

    it('Debería renderizar el id del pokemón en la carta...', () => {
        render(<MemoryRouter>
            <CardPokemon />
        </MemoryRouter>);
        const pokedexCardPokeId = screen.getByTestId('pokedex-card-pokeId')
        expect(pokedexCardPokeId).toBeTruthy()

    })

})