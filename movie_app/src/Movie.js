import React from 'react';
import { useGlobalcontext } from './Context';
import { NavLink } from 'react-router-dom';
import './Movie.css';



const Movie = () => {
  const{movie}=useGlobalcontext();
  
  return(
    <>
    <section className='movie-page'>
      {
    movie.map((currentdata)=>{
      const{imdbID, Poster , Title , Year} = currentdata;
      return(<NavLink to={`movie/"${imdbID}"`} >
       
        <div className='main-card'>
        <div className='card'>
          <div className='card_info'>
            <h2 className='title'>{Title}</h2>
            <h3 className='year'>{Year}</h3>
            <img alt={imdbID} src={Poster} className="img"></img>

          </div>
          </div> 
           

        </div>
      </NavLink>)
    })}
    </section>
  
 
  </>
  )
}

export default Movie;