import '.././index.css'
import { Outlet } from "react-router-dom"
import Search from './Search/Search';


function Root() {

    return (
        <div className=''>
            <Search />
            <Outlet />
        </div>
    );
}

export default Root;

