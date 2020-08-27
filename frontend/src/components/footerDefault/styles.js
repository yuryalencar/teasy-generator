import styled from 'styled-components'

export const Footer = styled.footer`
  position: fixed;
  display: flex;
  justify-content: space-between;
  bottom: 20px;
  width: 100vw;
  height: 80px;
  padding: 20px 50px;
  
  img{
    transition: 400ms;
    width: 100px;
    height: auto;
    :hover{
      cursor: pointer;
      transform: scale(1.2);
    }
  }
`