import React, { useEffect, useState } from 'react';
import './New.css';
import Row from '../Rows/Row/Row';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';
const NewList = ({ movies, base_url, isLargeRow }) => {
    <h1>this is new List page</h1>
    const [trailerUrl, setTrailerUrl] = useState('');

    const handleClick = (movie) => {
       
            movieTrailer(movie?.title || movie?.name || movie?.original_name)
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v')); // 'v' is a string
                })
                .catch((error) => {
                    console.error("Error fetching trailer: ", error);
                });
        }
    

    return (
        <div>
            <div className='New-posters'>
            
            </div>
        </div>
    );
}

export default NewList;