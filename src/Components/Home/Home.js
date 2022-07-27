import { Link } from 'react-router-dom'
import '../Home/Home.css'
import videoHome from '../../Assets/pokeOpening.mp4'

function Home() {
    return (
        <div className="bg-[url('../../Assets/pokeHome.png')] bg-[length:100%_100%]">
            <div className="md:flex content-center justify-center ">
                <div className='md:flex h-screen'>
                    <div className='md:w-96 m-4 pt-6'>
                        <video className='border-cyan-900 border-4' src={videoHome} autoPlay loop />
                        <Link to='/lista'>
                            <div className='pt-4'>
                                <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">ATRÁPALOS YA!</button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home