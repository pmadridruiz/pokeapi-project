import { Link } from 'react-router-dom'
import '../Home/Home.css'
import videoHome from '../../Assets/pokeOpening.mp4'

function Home() {
    return (
        <div className='bg-white'>
            <div className="md:flex content-center justify-center ">
                <div className='md:flex h-screen'>
                    <div className='md:w-96 m-4 pt-14'>
                        <video className='border-cyan-900 border-4' src={videoHome} autoPlay loop controls />
                        <Link to='/lista'>
                            <div className='pt-4'>
                                <button type="button" class="text-white bg-gray-900 border border-gray-300 focus:outline-none focus:ring-0 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">ATRÁPALOS YA!</button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home