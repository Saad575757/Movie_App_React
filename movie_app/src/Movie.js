import React from 'react';
import { useGlobalcontext } from './Context';


const Movie = () => {
  const {movie} = useGlobalcontext();
  return (
    <>
    <div>
      {
        movie.map((currentvalue)=>{
        <p>
          {currentvalue.Title}
          {currentvalue.Year}

        </p>
        })
      }
    </div>
    </>
  )
}

export default Movie;