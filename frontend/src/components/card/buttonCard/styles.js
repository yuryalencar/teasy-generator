import styled from 'styled-components'
import { colors } from '../../../styles/global'

export const ButtonCards= styled.button`
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: center;
  width: 150px;
  height: 30px;
  padding-left: 7px;
  padding-right: 7px;
  font-weight: bold;
  color: white;
  border: none;
  font-size: 15px;
  border-radius: 30px;
  transition: 400ms;
  background-color: ${props => props.active ? colors.activated : colors.deactivated};
  text-transform: uppercase;
  
  :hover{
    cursor: pointer;
    transform: scale(1.1);
  }
`