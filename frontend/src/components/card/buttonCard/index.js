import React from 'react'
import { ButtonCards } from './styles'

const ButtonCard = ({status}) => {
  return (
    <ButtonCards active={status}>{status? 'ACTIVE': 'deactivated'}</ButtonCards>
  )
}

export default ButtonCard
