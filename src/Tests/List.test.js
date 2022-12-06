import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react'
import List from '../Components/List/List'
import { MemoryRouter } from "react-router-dom";

describe('Unit testing de List', () => {

    it('Debería renderizar el componente List...', () => {
        render(<MemoryRouter>
            <List />
        </MemoryRouter>);
        const rendered = renderer.create(<MemoryRouter><List /></MemoryRouter>)
        expect(rendered).toBeTruthy()

    })

    it('Debería renderizar la pokemon card de List...', () => {
        render(<MemoryRouter>
            <List />
        </MemoryRouter>);
        const pokemonAppList = screen.getByTestId('list-card-pokemon')
        expect(pokemonAppList).toBeTruthy()

    })
})

