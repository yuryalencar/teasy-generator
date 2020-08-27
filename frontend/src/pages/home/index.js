import React from 'react'
import { Container,  WrapperLogo } from './styles'
import logo from '../../assets/img/logo_teasy.png'
import { useHistory } from "react-router-dom";
import FooterDefault from '../../components/footerDefault'

const Home = () => {
  let history = useHistory();
  
  const redirect = () =>  {
    history.push("/config");
  }
  return (
    <Container>
      <WrapperLogo>
        <img src={logo} alt={'Company Teasy logo'}/>
        <div>You have a Teasy JSON</div>
      </WrapperLogo>
      <FooterDefault title={'START'} action={redirect}/>
    </Container>
  )
}

export default Home

