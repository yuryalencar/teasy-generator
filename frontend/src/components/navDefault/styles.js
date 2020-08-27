import styled from 'styled-components'

export const Nav = styled.footer`
  position: fixed;
  display: flex;
  justify-content: space-between;
  justify-items: center;
  align-content: center;
  align-items: center;
  top: 10px;
  width: 100vw;
  height: 80px;
  padding: 0px 50px;
  
  svg{
    transition: 400ms;
    width: 40px;
    height: auto;
    :hover{
      cursor: pointer;
      transform: scale(1.2);
    }
  }
  
  img{
    transition: 400ms;
    width: 200px;
    height: auto;
  }
`