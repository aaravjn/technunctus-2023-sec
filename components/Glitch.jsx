import React from 'react'

const Glitch = ({text}) => {
  return (
     <div className="container">
            <p className="glitch">
              <span aria-hidden="true">{text}</span>
              {text}
              <span aria-hidden="true">{text}</span>
            </p>
      </div> 
  )
}

export default Glitch