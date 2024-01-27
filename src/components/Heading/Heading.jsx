import React from 'react'
import './heading.scss'

const Heading = ({children,type}) => {
  return (
    <h1 className={`heading ${type || ''}`}>{children}</h1>
  )
}

export default Heading