import styled from 'styled-components'
import { colors } from '../../styles/global'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: center;
  width: 100vw;
  height: 100vh;
`

export const WrapperBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 75%;
  padding: 20px;
  flex-wrap: nowrap;
  overflow: auto;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  flex-wrap: nowrap;
  overflow: auto;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 20px -6px rgba(0,0,0,0.71);
`

export const Header = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 60px;
  padding: 10px;
  color: white;
  text-transform: uppercase;
  background-color: ${colors.secondary};
  small{
  font-size: 11px;
  }
  h3{
  font-size: 15px;
  }
  svg{
  margin-right: 10px;
  }
`

