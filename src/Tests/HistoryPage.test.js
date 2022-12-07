import renderer from 'react-test-renderer';
import { render } from '@testing-library/react'
import HistoryPage from '../Components/History/HistoryPage';
import { MemoryRouter } from "react-router-dom";

describe('Unit testing de Batalla', () => {

    it('Debería renderizar el componente HistoryPage...', () => {
        render(<MemoryRouter>
            <HistoryPage />
        </MemoryRouter>);
        const rendered = renderer.create(<MemoryRouter><HistoryPage /></MemoryRouter>)
        expect(rendered).toBeTruthy()

    })
})