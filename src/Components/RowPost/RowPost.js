import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';
import './RowPost.css'
import { API_KEY, imageUrl } from '../../constants/constants'
import { baseUrl } from '../../constants/constants'
import axios from 'axios'

function RowPost(props) {

    const [movies, setMovies] = useState([])
    const [urlId, setUrlId] = useState('')

    useEffect(() => {
        // axios.get(`${baseUrl}/discover/tv?api_key=${API_KEY}&with_networks=213`).then((respose) => {
        axios.get(props.url).then((respose) => {
            console.log("response", respose.data)
            setMovies(respose.data.results)
        }).catch(err => {
            console.log(err)
        })
        // return () => {
        //     cleanup
        // }
    }, []);

    const handleMovie = (id) => {
        console.log("movies id", id);
        axios.get(`${baseUrl}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {

            if (response.data.results.length !== 0) {
                setUrlId(response.data.results[0])
                console.log("yturlresponse", response.data)
            } else {
                console.log('Array Empty')
            }
        }).catch(err => {
            console.log("yturlresponse", err)
        })
    };

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        }
    };



    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {movies.map((obj) =>

                    // <img className='poster' alt='poster' src={`${imageUrl+obj.backdrop_path}`} />
                    <div className='posterssingle'>
                        <img onClick={() => handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} alt='poster' src={`${imageUrl + obj.backdrop_path}`} />
                        <h2 className='movie-title'>{obj.title}</h2>
                    </div>
                )}

            </div>
            {urlId && <YouTube videoId={urlId.key} opts={opts} />}

        </div>
    )
}

export default RowPost
