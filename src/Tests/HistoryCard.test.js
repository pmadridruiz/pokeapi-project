import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react'
import HistoryCard from '../Components/Card/HistoryCard';
import { MemoryRouter } from "react-router-dom";

describe('Unit testing de FavoriteCard', () => {

    it('Debería renderizar el componente HistoryCard...', () => {
        render(<MemoryRouter>
            <HistoryCard />
        </MemoryRouter>);
        const rendered = renderer.create(<MemoryRouter><HistoryCard /></MemoryRouter>)
        expect(rendered).toBeTruthy()

    })

    it('Debería renderizar la imagen frontal del pokemón en la carta history...', () => {
        render(<MemoryRouter>
            <HistoryCard />
        </MemoryRouter>);
        const imageHistoryCard = screen.getByTestId('imageHistoryCard')
        expect(imageHistoryCard).toBeTruthy()

    })

    it('Debería renderizar nombre del pokemon de la carta history...', () => {
        render(<MemoryRouter>
            <HistoryCard />
        </MemoryRouter>);
        const nameHistoryCard = screen.getByTestId('nameHistoryCard')
        expect(nameHistoryCard).toBeTruthy()

    })

})