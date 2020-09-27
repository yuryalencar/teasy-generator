import React, { useContext } from 'react'
import { FormGroup, InputGroup, InputIcone } from './styles'
import { Hexagon } from 'react-feather'
import { JsonContext } from '../../context'

const InputSelect = ({ keyword, tree_path }) => {
  const { pages, onChangePage } = useContext(JsonContext)

  return (
    <FormGroup>
      <InputGroup>
        <InputIcone>{<Hexagon />}</InputIcone>
        <select
          className='form-control'
          onChange={(e) =>
            onChangePage({
              currentPage: tree_path,
              keyword: keyword,
              nextPage: pages[e.target.value],
            })
          }
        >
          <option value={{}}>Selecione uma opção</option>
          {pages.map((page, i) => (
            <option key={i} value={i}>
              {page.name}
            </option>
          ))}
        </select>
      </InputGroup>
    </FormGroup>
  )
}

export default InputSelect
