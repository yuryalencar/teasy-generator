import React from 'react'
import { Container } from './styles'
import ButtonCard from './buttonCard'

const CardDefault = ({id, handleStatus, title, status}) => {
  return (
    <Container status={status} onClick={() => handleStatus(id)} >
      <div>{title}</div>
      <ButtonCard status={status}/>
    </Container>
  )
}

export default CardDefault
