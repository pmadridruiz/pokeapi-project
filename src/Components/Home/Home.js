import React from 'react'
import '../Home/Home.css'
import videoHome from '../../Assets/pokeOpening.mp4'

function Home() {
    return (
        <div className="bg-[url('../../Assets/pokeHome.png')] bg-[length:100%_100%]">

            <div className="md:flex content-center justify-center ">
                <div className='md:flex h-screen'>
                    <div className='md:w-96 m-4 pt-6'>
                        <video className='border-red-400 border-4' src={videoHome} autoPlay loop />
                        <h1 className='font-bold'>ATRÁPALOS YA</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home