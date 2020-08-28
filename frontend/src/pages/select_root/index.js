import React, { useState } from 'react'
import NavDefault from '../../components/navDefault'
import FooterDefault from '../../components/footerDefault'
import { useHistory } from 'react-router-dom'
import { Container, Wrapper } from './styles'
import CardDefault from '../../components/card'

const SelectRoot = () => {
  const [status, setStatus] = useState()
  let history = useHistory()
  
  const redirect = () => {
    history.push('/select_root')
  }
  return (
    <Container>
      <NavDefault/>
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
      <FooterDefault title={'LET´S GO'} action={redirect}/>
    </Container>
  )
}

export default SelectRoot
