import React, { useEffect, useState } from 'react';
import './Row.css';

import axios from '../../../utils/axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovies] = useState([]); // Changed to an array for multiple movies
    const [trailerUrl, setTrailerUrl] = useState('');
    const base_url = 'https://image.tmdb.org/t/p/original';

    useEffect(() => {
      
        const fetchMovies = async () => {
            try {
             
                const request = await axios.get(fetchUrl); 
                
                setMovies(request.data.results); // Set the results from the API response
            } catch (error) {
                console.error("Failed to fetch movie data: ", error);
            }
        };
        fetchMovies();
    }, [fetchUrl]);

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl(''); 
         
        } else {
            
            movieTrailer(movie?.title || movie?.name || movie?.original_name)
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v')); // Corrected 'v' to be a string
                   
                  
                })
                .catch((error) => {
                    
                });
               
        }
    };

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    return (
       
        <div className="row">
            <h1>{title}</h1> {/* Fixed to display the title prop */}
            <div className='row-posters'>
                {movies?.map((movie, index) => (
                    <img
                        onClick={() => handleClick(movie)}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name} 
                      // className={`row-poster ${isLargeRow ? 'row-posterLarge' : ''}`}
                    />
                ))}
            </div>
            <div style={{ padding: '40px' }}>
                {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />} {/* Fixed typo from 'vidioId' to 'videoId' */}
            </div>
        </div>
    )
}
export default Row;