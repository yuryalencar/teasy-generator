import React from 'react'
import { Wrapper } from './styles'

const Description = ({icon, title}) => {
  return (
    
    <Wrapper>
      {icon}
      <small>{title}</small>
    </ Wrapper>
  
  )
}

export default Description
