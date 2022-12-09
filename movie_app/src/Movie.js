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
        </div>
      )
    })
  }
  </>
  
}

export default Movie;