import React from 'react'
import { useGlobalcontext } from './Context'
import './Search.css'

const Search = () => {
  const{ querry,setQuerry, isError} =useGlobalcontext();
  const changeEvent=(e)=>{
        setQuerry(e.target.value);
  }
 
  return (
    <>
     <section className='search-section'>
    <h2 className='heading'>Enter you favourite movie name</h2>
    <form action='#' onSubmit={(e)=>{e.preventDefault()}}>
      <div>
        <input className='input' type='text' placeholder=' Search Here' value={querry} onChange={changeEvent}></input>
      </div>
    </form>
    <div className='card-error'>
      <p>{isError.show && isError.msg}</p>
    </div>
  </section>
    </>
  )
}

export default Search