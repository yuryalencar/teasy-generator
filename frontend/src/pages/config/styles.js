import styled from 'styled-components'
import { colors } from '../../styles/global'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  flex-direction: column;
  align-items: center;
  align-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.primary};
  
`

export const Wrapper = styled.div`
    textarea {
    cursor: text;
    width: 800px;
    height: 400px;
    border-radius: 10px;
    border: 1px solid #a0a0a0;
    padding: 15px;
    box-shadow: 0px 0px 20px -6px rgba(0,0,0,0.71);
    resize: none;
    font-family: sans-serif;
  }
`