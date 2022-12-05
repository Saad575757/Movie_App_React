import React from 'react'
import { useParams } from 'react-router-dom';

const Singlemovie = () => {
  const {id}= useParams()
  return (
    <>
    <div>
      Hello Movie {id}
    </div>
    </>
  )
}

export default Singlemovie;