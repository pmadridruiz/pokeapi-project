// APP BASE
import { Outlet, Link } from "react-router-dom";

function Root() {

    return (
        <>
            <h1 className='bg-red-400 text-center m-4 text-white font-bold'>Pókemon App</h1>
            <nav className='border-b pb-4 bg-blue-600 font-bold text-center text-white'>
                <Link to="/">Inicio</Link> |{" "}
                <Link to="/buscar">Buscar Pókemon</Link> |{" "}
                <Link to="/batalla">Batalla Pókemon</Link> |{" "}
                <Link to="/todos">Pókemones</Link> |{" "}
                <Link to="/pokedex">Pokédex</Link>

            </nav>
            <Outlet />
        </>
    );
}

export default Root;


// style={{
//     borderBottom: "solid 1px",
//     paddingBottom: "1rem",
// }}