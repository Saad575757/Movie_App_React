import React from 'react';
import Movie from './Movie';
import Search from './Search';
import './Home.css';



const Home = () => {
 
  return (
    <>
    
      <Search />
      <div className='movie'>
      <Movie  />
      </div>
    </>
  )
}

export default Home;