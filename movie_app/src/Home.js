import React from 'react';
import Movie from './Movie';
import Search from './Search';
import './Home.css';



const Home = () => {
 
  return (
    <>
      <div className='search'>
      <Search />
      </div>
      <div className='movie'>
      <Movie  />
      </div>
    </>
  )
}

export default Home;