import React from 'react'
import { GitCommit } from 'react-feather'
import InputSelect from '../inputSelect'
import { Action, ActionIcon, ActionTitle } from './styles'

const ActionTree = ({title}) => {
  return (
    <Action>
      <ActionTitle>{title}</ActionTitle>
      <ActionIcon><GitCommit/></ActionIcon>
      <InputSelect/>
    </Action>
  )
}

export default ActionTree
