import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color,setColor] = useState('');
  const [error,setError] = useState(false);
  const [list,setList] = useState(new Values('#7FFFD4').all(10));

  const handleSubmit = (e)=>{
    e.preventDefault();
    // from values.js 
    try{
      let colors = new Values(color).all(10) // turn input into 10decimal value for rgb
      setList(colors);
    } catch (error){
      setError(true)
      console.log(error)
    }
  };
   
  return (
    <>
    <section className='container'>
      <h3>Color Gernerator</h3>
      <form onSubmit={handleSubmit}>
        <input type='text'value={color} onChange={(e)=> setColor(e.target.value)}
        placeholder="#7FFFD4"
        className={`${ error ? 'error' : null }`}
        />
        <button className='btn' type='submit'>
          submit
        </button>
      </form>
      <h3>(click to copy)</h3>
    </section>
    <section className="colors">
      {list.map((color, index)=>{
        return <SingleColor 
        key={index} 
        {...color} 
        index={index} 
        hexColor={color.hex}/>
      })}
    </section>
    </>
  )
}

export default App
