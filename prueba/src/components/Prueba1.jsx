import React from 'react'
import { useState } from 'react'

const Prueba1 = () => {
    const [text, setText] = useState('Texto')

  return (
    <div>
        <h2>{text}</h2>
        <input type="text" name="text" id="text"  onChange={(e) => setText(event.target.value)} />
    </div>
  )
}

export default Prueba1