// APP BASE
import { Link } from "react-router-dom";

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
                <Link to="/search">Buscar Pókemon</Link> |{" "}
                <Link to="/combat">Batalla Pókemon</Link> |{" "}
                <Link to="/pokedex">Pokédex</Link>
            </nav>
        </>
    );
}

export default Root;
