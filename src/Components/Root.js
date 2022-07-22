import PokeLogo from '../Assets/pokemonlogo.png'
import '.././index.css'
import { Link, Outlet } from "react-router-dom"
import Search from './Search/Search';

function Root() {

    return (
        <div className='container m-auto'>

            <img width='240' src={PokeLogo} alt='yes' />
            <div className='text-right'>
                <Link to="/inicio">
                    Inicio
                </Link> |{" "}
                <Link to="/pokemon">
                    Pokemon
                </Link> |{" "}
                <Link to="/historial">
                    Historial
                </Link> |{" "}
                <Link to="/lista">
                    Lista de Pókemones
                </Link> |{" "}
                <Link to="/combate">
                    Combate
                </Link>
            </div>

            <Search />
            <Outlet />
        </div>
    );
}

export default Root;

