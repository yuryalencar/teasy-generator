import React from 'react'
import { Container, DividerDefault } from './styles'
import { ArrowDownCircle } from 'react-feather'

const Divider = () => {
  return (
    <Container>
      <DividerDefault/><ArrowDownCircle/> <DividerDefault/>
    </ Container>
  )
}

export default Divider
