import styled from 'styled-components'
import { colors } from '../../styles/global'

export const WrapperInput = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: center;
  min-width: 250px;
  
  svg{
    margin-left: -40px;
    width: 25px;
    height: 25px;
    color: ${colors.description};
  }
`

export const InputSearch = styled.input`
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 42px;
  font-size: 15px;
  color: black;
  border: none;
  border-radius: 10px;
  background-color: white;
  padding: 12px 20px;
  box-shadow: 0px 0px 20px -6px rgba(0,0,0,0.71);
  
  :hover{
    cursor: pointer;
  }
`