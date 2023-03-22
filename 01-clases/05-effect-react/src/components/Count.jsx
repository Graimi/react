import { useEffect } from "react"
import { useState } from "react"
import React from 'react'

const Count = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      console.log('useEffect called ran. Count is: ', count)
    }, [count]) // Añadimos las variables que queremos trackear

  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={()=>setCount(count+1)}>A sumar</button>
        <button onClick={()=>setCount(count-1)}>A restar</button>
    </div>
  )
}

export default Count