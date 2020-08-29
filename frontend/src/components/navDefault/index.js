import React from 'react'
import { ArrowLeftCircle } from 'react-feather'
import { Nav } from './styles'
import logo from '../../assets/img/logo_teasy.png'
import SearchInput from '../search'

const NavDefault = () => {
  
  function goBack() {
    window.history.back()
  }
  
  return (
    <Nav>
      <div className={'icon'}><ArrowLeftCircle onClick={() => goBack()}/></div>
      <div className={'logo'}><img src={logo} alt={'Company Teasy logo'}/></div>
      <div className={'input'}><SearchInput/></div>
    </Nav>
  )
}

export default NavDefault
