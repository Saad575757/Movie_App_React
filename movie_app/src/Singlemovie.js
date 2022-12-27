import React,{useState, useEffect, } from 'react'
import { useParams } from 'react-router-dom';
import { API_URL } from './Context';
import './Singlemovie.css';

const Singlemovie = () => {
  const {id}= useParams();
  const [isLoading, setisLoading ] = useState(true);
  const [movie, setMovie] = useState('');
  
  

  const getMovies = async (url) => {
      
      setisLoading(true);

      try {
          const res = await fetch(url);
          const data = await res.json();
          console.log(data);

          if (data.Response === "True") {
              setMovie(data);
              setisLoading(false);

          }
          

      } catch (error) {
          console.log(error)
      }
  }

  useEffect(() => {
      let timerOut = setTimeout(() => {
          getMovies(`${API_URL}&i=${id}`);
      }, 1000);
      return () => clearTimeout(timerOut);

  }, [id]);
  if(isLoading){
    return(
      <div className='movie-section'>
        <div className='loading'>Loading...</div>

      </div>
    )
  }
  else{
  return (
    <>
    <div className='movie-page'>
      <div className='movie-card'>
        <figure>
          <img alt='' src={movie.Poster}></img>
          
        </figure>
        <div className='movie-container'>
          <p>{movie.Title}</p>
          <p>{movie.Released}</p>
          <p>{movie.imdbRating}/10</p>
          <p>{movie.Type}</p>
          <p>{movie.Country}</p>
          <p>{movie.Genre}</p>
        </div>
      </div>
    </div>
    </>
    
  )
  }
}

export default Singlemovie;