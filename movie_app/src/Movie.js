import React from 'react';
import { useGlobalcontext } from './Context';
import { NavLink } from 'react-router-dom';
import './Movie.css';



const Movie = () => {
  const{movie}=useGlobalcontext();
  
  return(
    <>
    <section className='movie-page'>
      <div className='grid grid-4-col'>{
    movie.map((currentdata)=>{
      const{imdbID, Poster , Title , Year} = currentdata;
      return(<NavLink to={`movie/"${imdbID}"`} >
        <div className='card'>
          <div className='card_info'>
            <h2>{Title}</h2>
            <h3>{Year}</h3>
            <img alt={imdbID} src={Poster}></img>

          </div>

        </div>
      </NavLink>)
    })}</div>
    </section>
  
 
  </>
  )
}

export default Movie;