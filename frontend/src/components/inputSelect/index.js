import React, {useContext} from 'react'
import { FormGroup, Input, InputGroup, InputIcone } from './styles'
import { Hexagon } from 'react-feather'
import {JsonContext} from "../../context";

const InputSelect = () => {
  const {pages} = useContext(JsonContext)
  return (
    <FormGroup>
      <InputGroup>
        <InputIcone>{<Hexagon/>}</InputIcone>
        <select className="form-control">
          {pages.map((page, i) => {
            return(
                <option key={i} value={i}>{page.name}</option>
            )
          })}
          
        </select>
    
      </InputGroup>
    </FormGroup>
  )
}

export default InputSelect
