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
  background-color: ${colors.primary};
`

export const WrapperLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: center;
  background-color: ${colors.primary};
  font-size: 25px;
  font-weight: lighter;
  font-style: italic;
  color: ${colors.description};
`
