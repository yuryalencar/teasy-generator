import React from 'react'
import { InputSearch, WrapperInput } from './styles'
import { Search } from 'react-feather'

const SearchInput = () => {
  return (
    <WrapperInput>
      <InputSearch placeholder={'SEARCH'}/>
      <Search/>
    </WrapperInput>
  )
}

export default SearchInput
