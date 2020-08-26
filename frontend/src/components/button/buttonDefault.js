import styled from 'styled-components'

export const ButtonDefault = styled.button`
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: center;
  width: 220px;
  height: 45px;
  font-weight: bold;
  font-size: 15px;
  color: black;
  border: 3px solid black;
  border-radius: 15px;
  background-color: transparent;
  transition: 400ms;
  
  :hover{
    cursor: pointer;
    transform: scale(1.1);
  }
`