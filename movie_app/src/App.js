import React from 'react'
import Home from './Home';
// import Movie from './Movie';
import Singlemovie from './Singlemovie';
import Error from './Error';
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
    
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path='movie/:id' element={<Singlemovie />} />
          <Route  path="*" element={<Error />} />
          
    </Routes>
    
    </>
  )
}

export default App;