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
      <ArrowLeftCircle onClick={() => goBack()}/>
      <img src={logo} alt={'Company Teasy logo'}/>
     <SearchInput className={'input'}/>
    </Nav>
  )
}

export default NavDefault
