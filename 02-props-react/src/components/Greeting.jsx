import React from 'react'

// La versión normal es hacerla así
const Greeting = (props) => {
    return (
      <div>Hola {props.name} {props.surname}</div>
    )
  }

// Pero tb se puede hacer con destructuring
// const Greeting = ({name, surname}) => {
//   return (
//     <div>Hola {name} {surname}</div>
//   )
// }

export default Greeting