import React, { useEffect, useState } from 'react'
// import axios from '../../axios' 

import axios from 'axios'
import {API_KEY,imageUrl} from '../../constants/constants'
import {baseUrl} from '../../constants/constants'
import './Banner.css'




//(trending/all/week?api_key=71de7d2ef1ed285fb742d2799ba70216)
//eaqual to
//(`trending/all/week?api_key=${API_KEY}`)

function Banner() {

    const [movie, setMovie] = useState()

    useEffect(() => {
        axios.get(`${baseUrl}/trending/all/week?api_key=${API_KEY}`).then((respose) => {
            console.log(respose.data.results[0])
            // setMovie(respose.data.results[0])
            setMovie(respose.data.results.sort(function (a,b) {return 0.5-Math.random()})[0]) 

            // .sort(function (a,b) {return 0.5-Math.random()}) --to create a random sorted array
        })
        .catch(err =>{
            console.log(err)
        })
        return () => {
            
        }
    }, [])

    return (
        // <div style={{backgroundImage:`url(${movie ? 'https://image.tmdb.org/t/p/original'+movie.backdrop_path : ""})`}}
         <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}     
         className='banner'>
         
            <div className='content' >
                <h1 className='title'>{movie ? movie.title : ""}</h1>
                <div className='banner_buttons' >
                    <button className='button' >Play</button>
                    <button className='button' >My list</button>
                </div>
                <h1 className='description'>{movie ? movie.overview : ""}</h1>
            </div>
        <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner
