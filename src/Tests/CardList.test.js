import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react'
import CardList from '../Components/Card/CardList'
import { MemoryRouter } from "react-router-dom";

describe('Unit testing de CardList', () => {

    it('Debería renderizar el componente CardList...', () => {
        render(<MemoryRouter>
            <CardList />
        </MemoryRouter>);
        const rendered = renderer.create(<MemoryRouter><CardList /></MemoryRouter>)
        expect(rendered).toBeTruthy()

    })

    it('Debería renderizar la imagen del pokemon...', () => {
        render(<MemoryRouter>
            <CardList />
        </MemoryRouter>);
        const imagenPokemon = screen.getByTestId('imgPokemon')
        expect(imagenPokemon).toBeTruthy()

    })

    it('Debería renderizar el h2 con el nombre del pokemon...', () => {
        render(<MemoryRouter>
            <CardList />
        </MemoryRouter>);
        const pokemonName = screen.getByTestId('pokemonName')
        expect(pokemonName).toBeTruthy()
    })

    it('Debería renderizar el small con la exp base del pokemon...', () => {
        render(<MemoryRouter>
            <CardList />
        </MemoryRouter>);
        const pokemonBaseExp = screen.getByTestId('pokemonBaseExp')

        expect(pokemonBaseExp).toBeTruthy()
    })
})