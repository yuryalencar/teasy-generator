import React, { useContext, useState } from 'react'
import { FormGroup, InputGroup, InputIcone } from './styles'
import { Hexagon } from 'react-feather'
import { JsonContext } from "../../context";

const InputSelect = () => {
  const { pages, onChangePage } = useContext(JsonContext)

  return (
    <FormGroup>
      <InputGroup>
        <InputIcone>{<Hexagon />}</InputIcone>
        <select className="form-control" onChange={(e) => onChangePage(pages[e.target.value])}>
          <option value={null} selected>Selecione uma opção</option>
          {pages.map((page, i) => {
            return (<option key={i} value={i}>{page.name}</option>)
          })}
        </select>

      </InputGroup>
    </FormGroup>
  )
}

export default InputSelect
