import React, {useContext, useState} from 'react'
import NavDefault from '../../components/navDefault'
import FooterDefault from '../../components/footerDefault'
import {useHistory} from 'react-router-dom'
import { Container, Wrapper } from './styles'
import { Code } from 'react-feather'
import Description from '../../components/description'
import {toastError} from "../../components/toast";
import {JsonContext} from "../../context";

const Config = () => {
  const [json, setJson] = useState('')
  const { setPage } = useContext(JsonContext)
  let history = useHistory()
  
  const validate = () => {
    if (json.trim().length > 0 ) {
      setPage(JSON.parse(json))
      return true
    }
    toastError('This field is required')
  }
 
  const redirect = () => {
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
