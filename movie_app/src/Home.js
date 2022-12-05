import React from 'react';
import { useGlobalcontext } from './Context';

const Home = () => {
  const name = useGlobalcontext();
  return (
    <>
    <p>My name is {name}</p>
    </>
  )
}

export default Home