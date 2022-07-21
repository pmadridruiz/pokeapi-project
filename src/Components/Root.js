// APP BASE
import { Outlet, Link } from "react-router-dom";

function Root() {

    return (
        <>
            <h1>Pókemon App</h1>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                }}
            >
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
