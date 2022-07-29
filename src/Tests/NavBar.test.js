import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react'
import NavBar from '../Components/NavBar/NavBar'
import { MemoryRouter } from "react-router-dom";

describe('Unit testing de NavBar', () => {

    it('Debería renderizar el componente NavBar...', () => {
        render(<MemoryRouter>
            <NavBar />
        </MemoryRouter>);
        const navBarPokeAppComp = renderer.create(<MemoryRouter><NavBar /></MemoryRouter>)
        expect(navBarPokeAppComp).toBeTruthy()

    })

    it('Debería renderizar la NavBar del componente NavBar...', () => {
        render(<MemoryRouter>
            <NavBar />
        </MemoryRouter>);
        const navBarPokeAppNav = screen.getByTestId('navbar-pokemonapp')
        expect(navBarPokeAppNav).toBeTruthy()

    })

})