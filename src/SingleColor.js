import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert,setAlert] = useState(false)
  const bcg = rgb.join(',') // return array for rgb color 
  const hex = rgbToHex(...rgb) // turn rgb back to hex for display
  const hexValue = `#${hexColor}`
  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setAlert(false)
    }, 3000)
    return ()=> clearTimeout(timeout)
  },[alert])
  
  return (
    <article className={`color ${index > 10 &&
       'color-light'}`} //index:10 the base color 
    style={{backgroundColor: `rgb(${bcg})`}} 
    onClick={()=>{
      setAlert(true);
      navigator.clipboard.writeText(hexValue)}}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      {alert && <p className='alert'>copied to clickboard</p>}
    </article>
  )
}

export default SingleColor
