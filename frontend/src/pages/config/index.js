import React from 'react'
import NavDefault from '../../components/navDefault'
import FooterDefault from '../../components/footerDefault'
import { useHistory } from 'react-router-dom'
import { Container, Wrapper } from './styles'
import { Code } from 'react-feather'
import Description from '../../components/description'

const Config = () => {
  let history = useHistory()
  
  const redirect = () => {
    history.push('/selectRoot')
  }
  return (
    <Container>
      <NavDefault/>
      <Wrapper>
        <Description icon={<Code/>} title={'PASTE ABOVE OF THE TEASY JSON GENERATED'}/>
        <textarea/>
      </Wrapper>
      <FooterDefault title={'LET´S GO'} action={redirect}/>
    </Container>
  )
}

export default Config
