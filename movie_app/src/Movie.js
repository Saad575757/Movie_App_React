import React from 'react';
import { useGlobalcontext } from './Context';
import { Navlink} from 'react-router-dom';



const Movie = () => {
  const{movie}=useGlobalcontext();
  
  return(
    <>
    <section className='movie-page'>
      <div className='grid grid-4-col'>{
    movie.map((currentdata)=>{
      const{imdbID, Poster , Title , Year} = currentdata;
      return<Navlink to='' ></Navlink>
    })}</div>
    </section>
  
 
  </>
  )
}

export default Movie;