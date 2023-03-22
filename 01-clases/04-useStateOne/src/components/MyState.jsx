import React, { useState } from 'react'

const MyState = () => {

    const [name, setMyName] = useState("Ziggy Stardust")

  return (
    <div>
        <h1>Bienvenido {name}</h1>

        <input 
        type="text" 
        value= {name}
        onChange={(event)=> setMyName(event.target.value)}
        />
    </div>
  )
}

export default MyState