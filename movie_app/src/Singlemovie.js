import React,{useState, useEffect, } from 'react'
import { useParams , NavLink} from 'react-router-dom';
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
    const {Poster, Title, Released, imdbRating, Type,Country, Genre}=movie
  return (
    <>
    <div className='movie-page'>
      <div className='movie-card'>
        <figure>
          <img alt='' src={Poster} className="img" ></img>
          
        </figure>
        </div>
        <div className='movie-container'>
          <h4 className='title'>{Title}</h4>
          <p className='type'>{Type}</p>
          <p className='genre'>{Genre}</p>
          <p className='country'>{Country}</p>
          <p className='release'>{Released}</p>
          <p className='rating'>{imdbRating}/10</p>
          <NavLink to='/' className='button'>Go back</NavLink>
          
        </div>
        
      
    </div>
    </>
    
  )
  }
}

export default Singlemovie;