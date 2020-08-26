import React from 'react'
import { Container, Footer, WrapperLogo } from './styles'
import logo from '../../assets/img/logo_teasy.png'
import learn from '../../assets/img/learn.svg'
import github from '../../assets/img/github.svg'
import { ButtonDefault } from '../../components/button/buttonDefault'

const Home = () => {
  return (
    <Container>
      <WrapperLogo>
        <img src={logo} alt={'Company Teasy logo'}/>
        <div>You have a Teasy JSON</div>
      </WrapperLogo>
      <Footer>
        <img src={learn} alt={'Learning about Teasy'}/>
        <ButtonDefault>START</ButtonDefault>
        <img src={github} alt={'Company GitHub logo'}/>
      </Footer>
    </Container>
  )
}

export default Home

