import React from 'react'
import '../Home/Home.css'
import videoHome from '../../Assets/pokeOpening.mp4'

function Home() {
    return (
        <>
            <>
                <video src={videoHome} autoPlay loop />
            </>
        </>
    )
}

export default Home