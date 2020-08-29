import React from 'react'
import { FormGroup, Input, InputGroup, InputIcone } from './styles'
import { Hexagon } from 'react-feather'

const InputSelect = () => {
  return (
    <FormGroup>
      <InputGroup>
        <InputIcone>{<Hexagon/>}</InputIcone>
        <select className="form-control">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
    
      </InputGroup>
    </FormGroup>
  )
}

export default InputSelect
