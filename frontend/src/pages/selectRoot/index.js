import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Code } from 'react-feather'
import { Container, Wrapper, WrapperBody } from './styles'
import NavDefault from '../../components/navDefault'
import FooterDefault from '../../components/footerDefault'
import CardDefault from '../../components/card'
import Description from '../../components/description'


const SelectRoot = () => {
  const [status, setStatus] = useState()
  let history = useHistory()
  
  const redirect = () => {
    history.push('/makeTree')
  }
  return (
    <Container>
      <NavDefault/>
      <WrapperBody>
        <Description icon={<Code/>} title={'PASTE ABOVE OF THE TEASY JSON GENERATED'}/>
        <Wrapper>
          <CardDefault title={'Texto home'} id={1} status={status === 1} handleStatus={setStatus}/>
          <CardDefault title={'Texto home'} id={2} status={status === 2} handleStatus={setStatus}/>
          <CardDefault title={'Texto home'} id={3} status={status === 3} handleStatus={setStatus}/>
          <CardDefault title={'Texto home'} id={4} status={status === 4} handleStatus={setStatus}/>
          <CardDefault title={'Texto home'} id={5} status={status === 5} handleStatus={setStatus}/>
          <CardDefault title={'Texto home'} id={6} status={status === 6} handleStatus={setStatus}/>
          <CardDefault title={'Texto home'} id={7} status={status === 7} handleStatus={setStatus}/>
          <CardDefault title={'Texto home'} id={8} status={status === 8} handleStatus={setStatus}/>
          <CardDefault title={'Texto home'} id={9} status={status === 9} handleStatus={setStatus}/>
          <CardDefault title={'Texto home'} id={10} status={status === 10} handleStatus={setStatus}/>
          <CardDefault title={'Texto home'} id={11} status={status === 11} handleStatus={setStatus}/>
          <CardDefault title={'Texto home'} id={12} status={status === 12} handleStatus={setStatus}/>
        </Wrapper>
      </WrapperBody>
      
      <FooterDefault title={'LET´S GO'} action={redirect}/>
    </Container>
  )
}

export default SelectRoot
