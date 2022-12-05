import React from 'react'
import Home from './Home';
// import Movie from './Movie';
import Singlemovie from './Singlemovie';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path='movie/:id' element={<Singlemovie />} />
          
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;