import React, { useEffect, useState } from "react";
import axios from "../../utils/axios"; // Ensure axios is set up correctly
import request from "../../utils/request"; // Ensure this points to the correct API endpoint
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        // Fetch movies from the API
        const response = await axios.get(request.fetchNetflixOriginal);
        console.log(response.data); 

        // Check if results exist
        if (response.data.results && response.data.results.length > 0) {
          const randomIndex = Math.floor(
            Math.random() * response.data.results.length
          );
          setMovie(response.data.results[randomIndex]);
        } else {
          setError("No movies found.");
        }
      } catch (error) {
        setError("Failed to fetch movie data.");
        console.error("Fetch error:", error);
        if (error.response) {
          console.error("Response error:", error.response.data);
        }
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  if (loading) {
    return <div>Loading...</div>; // Render loading state
  }

  if (error) {
    return <div>{error}</div>; // Render error state
  }

  return (
    <div
      className="Banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner-button">
          {/* <a href="/rowlist"> <button className="banner-button play">Play</button></a>
          <button className="banner-button">My List</button> */}
        </div>
        <h1 className="banner-description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner-fadebutton"></div>
    </div>
  );
};

export default Banner;