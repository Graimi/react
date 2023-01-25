import { useState } from "react"
import React from 'react'
import MessageComponent from "./MessageComponent"

const EffectUnmount = () => {
    const [visible, setVisible] = useState(false)

  return (
    <>  
    {visible && <MessageComponent />}
    <button onClick={() => setVisible(!visible)}>I'm inevitable</button>
    </>
  )
}

export default EffectUnmount