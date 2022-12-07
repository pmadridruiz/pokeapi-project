import renderer from 'react-test-renderer';
import { render } from '@testing-library/react'
import FavoritePage from '../Components/Favorites/FavoritePage';
import { MemoryRouter } from "react-router-dom";

describe('Unit testing de Batalla', () => {

    it('Debería renderizar el componente FavoritePage...', () => {
        render(<MemoryRouter>
            <FavoritePage />
        </MemoryRouter>);
        const rendered = renderer.create(<MemoryRouter><FavoritePage /></MemoryRouter>)
        expect(rendered).toBeTruthy()

    })
})