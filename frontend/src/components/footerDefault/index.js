import React from 'react'
import learn from '../../assets/img/learn.svg'
import { ButtonDefault } from '../button/buttonDefault'
import github from '../../assets/img/github.svg'
import { Footer } from './styles'

const FooterDefault = ({ title, action }) => {
  return (
    <Footer>
      <img src={learn} alt={'Learning about Teasy'} />
      {action && <ButtonDefault onClick={action}>{title}</ButtonDefault>}

      <img
        src={github}
        onClick={() =>
          window.open('https://github.com/yuryalencar/TeasyGenerator')
        }
        alt={'Company GitHub logo'}
      />
    </Footer>
  )
}

export default FooterDefault
