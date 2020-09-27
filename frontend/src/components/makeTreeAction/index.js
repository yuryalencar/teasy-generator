import React from 'react'
import { GitCommit } from 'react-feather'
import InputSelect from '../inputSelect'
import { Action, ActionIcon, ActionTitle } from './styles'

const ActionTree = ({ keyword, tree_path }) => {

  return (
    <Action>
      <ActionTitle>{keyword}</ActionTitle>
      <ActionIcon><GitCommit /></ActionIcon>
      <InputSelect tree_path={tree_path} keyword={keyword} />
    </Action>
  )
}

export default ActionTree
