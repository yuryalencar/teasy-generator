import React, {useState} from 'react'
import NavDefault from '../../components/navDefault'
import FooterDefault from '../../components/footerDefault'
import { useHistory } from 'react-router-dom'
import { Container, Wrapper } from './styles'
import { Code } from 'react-feather'
import Description from '../../components/description'
import { ToastProvider, useToasts } from 'react-toast-notifications'

const Config = () => {
  const [json, setJson] = useState('')
  let history = useHistory()
  
  const validate = () => {
    if (json.trim().length > 0 ) return true
  }
  const { addToast } = useToasts()
  const redirect = () => {

    addToast('Saved Successfully', { appearance: 'success' })
    validate() && history.push('/selectRoot')
  }
  return (
    <Container>
      <NavDefault/>
      <Wrapper>
        <Description icon={<Code/>} title={'PASTE ABOVE OF THE TEASY JSON GENERATED'}/>
        <textarea onChange={(e) => setJson(e.target.value)}/>
      </Wrapper>
      <FooterDefault title={'LET´S GO'} action={redirect}/>
    </Container>
  )
}

export default Config
