import styled from 'styled-components'
import { colors } from '../../styles/global'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  justify-items: center;
  align-items: center;
  align-content: space-between;
  width: 100%;
  height: 60px;
  border-radius: 7px;
  background-color: ${props => props.status ? colors.light_success : 'white'};
  padding: 15px;
  box-shadow: 0px 0px 20px -6px rgba(0,0,0,0.71);
  font-size: 20px;
  color: black;
  text-transform: uppercase;
  margin-bottom: 10px;
 
`