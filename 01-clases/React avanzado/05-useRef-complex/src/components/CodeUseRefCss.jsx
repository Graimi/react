import React from 'react'
import '../App.css'
import { useRef } from 'react'

const CodeUseRefCss = () => {
    const colorRef = useRef(null);
    const changeColor = () => {
        colorRef.current?.className ==='box' ?
        colorRef.current.className = 'box-modify' :
        colorRef.current.className ='box';
        console.log(colorRef)
    }
  return (
    <div >
        <h3 className='box' ref={colorRef}> Componente Cambiar color</h3>
    <button onClick={changeColor} >Modify Color</button>
    </div>
  )
}

export default CodeUseRefCss