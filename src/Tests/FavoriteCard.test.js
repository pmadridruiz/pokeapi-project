import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react'
import FavoriteCard from '../Components/Card/FavoriteCard';
import { MemoryRouter } from "react-router-dom";

describe('Unit testing de FavoriteCard', () => {

    it('Debería renderizar el componente FavoriteCard...', () => {
        render(<MemoryRouter>
            <FavoriteCard />
        </MemoryRouter>);
        const rendered = renderer.create(<MemoryRouter><FavoriteCard /></MemoryRouter>)
        expect(rendered).toBeTruthy()

    })

    it('Debería renderizar la imagen frontal del pokemón en la carta favoritos...', () => {
        render(<MemoryRouter>
            <FavoriteCard />
        </MemoryRouter>);
        const pokemonCardImage = screen.getByTestId('pokemonCardImageFav')
        expect(pokemonCardImage).toBeTruthy()

    })

    it('Debería renderizar botón de "Eliminar Favorito" si está en favoritos...', () => {
        render(<MemoryRouter>
            <FavoriteCard />
        </MemoryRouter>);
        const pokemonButtonFav = screen.getByTestId('pokemonButtonFavCard')
        expect(pokemonButtonFav).toBeTruthy()

    })

})