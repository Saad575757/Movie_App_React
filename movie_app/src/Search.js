import React from 'react'
import { useGlobalcontext } from './Context'

const Search = () => {
  const{ querry,setQuerry, isError} =useGlobalcontext();
  const changeEvent=(e)=>{
        setQuerry(e.target.value);
  }
 
  return (
    <>
     <section className='Search-section'>
    <h2>Enter you favourite movie name</h2>
    <form action='#' onSubmit={(e)=>{e.preventDefault()}}>
      <div>
        <input type='text' placeholder='Enter movie name' value={querry} onChange={changeEvent}></input>
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