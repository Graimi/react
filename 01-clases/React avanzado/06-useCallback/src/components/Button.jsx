import React, { memo } from 'react'

const Button = memo(({handleClick, name}) => {
    console.log(`Button ${name} rendered`)
  return (
    <button onClick={handleClick}>{name}</button>
  )
})

export default Button