import React, { useEffect, useState } from "react";
import YouTube from 'react-youtube';
import "./Movie.css"


const Movie = () => {
    const [divWidth, setDivWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setDivWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    let opts = {};
  
    if (divWidth <= 1200) {
      opts = {
        height: '100%',
        width: '100%'
      };
    }
    return (
        <div className='movie'>
            <div className="movie-title">
                <span className="movie-title1">Jak wygląda lekcja?</span>
            </div>
            <div>
                <YouTube opts={opts} videoId="2g811Eo7K8U" />
            </div>
        </div>
    )
}

export default Movie