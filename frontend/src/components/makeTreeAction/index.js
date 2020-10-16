import React from 'react'
import { GitCommit } from 'react-feather'
import InputSelect from '../inputSelect'
import { Action, ActionIcon, ActionTitle } from './styles'

const ActionTree = ({ keyword, treePath, actualNode, isRoot }) => {
  return (
    <Action>
      <ActionTitle>{keyword}</ActionTitle>
      <ActionIcon>
        <GitCommit />
      </ActionIcon>
      <InputSelect
        treePath={treePath}
        keyword={keyword}
        actualNode={actualNode}
        isRoot={isRoot}
      />
    </Action>
  )
}

export default ActionTree
