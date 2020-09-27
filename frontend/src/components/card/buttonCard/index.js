import React from 'react'
import { ButtonCards } from './styles'

const ButtonCard = ({ status }) => {
  return (
    <ButtonCards active={status}>{status ? 'activated': 'disabled'}</ButtonCards>
  )
}

export default ButtonCard
