import React from 'react';
import { useGlobalcontext } from './Context';



const Movie = () => {
  const{movie}=useGlobalcontext();
  
  return<>
  {
    movie.map((currentdata)=>{
      return(
        <div>
          <p>{currentdata.Title}</p>
          <p>{currentdata.Year}</p>
          <p>{currentdata.imdbID}</p>
          <p>{currentdata.Type}</p>
          
        </div>
      )
    })
  }
  </>
  
}

export default Movie;