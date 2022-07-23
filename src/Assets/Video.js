import React from 'react'
import pokeVideo from '../Assets/pokeOpening.mp4'
import '../Assets/Video.css'


function Video() {
    return (
        <div className='video'>
            <video src={pokeVideo} autoPlay loop controls='play' />
        </div>
    )
}

export default Video