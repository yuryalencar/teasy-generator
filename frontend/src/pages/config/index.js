import React from 'react'
import NavDefault from '../../components/navDefault'
import FooterDefault from '../../components/footerDefault'
import { useHistory } from 'react-router-dom'
import { Container, Wrapper } from './styles'
import { Code } from 'react-feather'

const Config = () => {
  let history = useHistory()
  
  const redirect = () => {
    history.push('/select_root')
  }
  return (
    <Container>
      <NavDefault/>
      <Wrapper>
        <div><Code/><small> PASTE ABOVE OF THE TEASY JSON GENERATED</small></div>
        <textarea/>
      </Wrapper>
      <FooterDefault title={'LET´S GO'} action={redirect}/>
    </Container>
  )
}

export default Config
