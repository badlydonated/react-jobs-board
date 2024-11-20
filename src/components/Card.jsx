import React from 'react'
// adding children as a prop. The children hold the content to be wrapped in the Card container
const Card = ({ children, bg = 'bg-gray-100' }) => {
  return (
    <div className={ `${bg} p-6 rounded-lg shadow-md` }>
        { children }
    </div>
  )
}

export default Card
