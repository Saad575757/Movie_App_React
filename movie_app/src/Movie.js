import React from 'react';
import { useGlobalcontext } from './Context';



const Movie = () => {
  
  const {movie} = useGlobalcontext();
  return (
    <>
    
      {
        movie.map((currentvalue)=>{
          return(
            <div>
        <p>
          {currentvalue.Title}
          
          

        </p>
        </div>
          )
        })
      }
    
    </>
  )
}

export default Movie;