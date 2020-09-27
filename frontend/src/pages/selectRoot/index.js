import React, {useContext, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {Code} from 'react-feather'
import {Container, Wrapper, WrapperBody} from './styles'
import NavDefault from '../../components/navDefault'
import FooterDefault from '../../components/footerDefault'
import CardDefault from '../../components/card'
import Description from '../../components/description'
import {JsonContext} from "../../context";
import {toastError} from "../../components/toast";

const SelectRoot = () => {
  const {pages, insertRoot} = useContext(JsonContext)
  const [status, setStatus] = useState()
  let history = useHistory()
  
  const validate = () => {
	if (status !== undefined) {
	  insertRoot({root: pages[status]})
	  return true
	}
    toastError('This field is required')
  }
  
  const redirect = () => {
	validate() && history.push('/makeTree')
  }
  return (
	  <Container>
		<NavDefault/>
		<WrapperBody>
		  <Description icon={<Code/>} title={'PASTE ABOVE OF THE TEASY JSON GENERATED'}/>
		  <Wrapper>
			{pages && pages.map((page, i) => {
			  return (
				  <CardDefault key={i} title={page.name} id={i} status={status === i} handleStatus={setStatus}/>
			  )
			})}
		  </Wrapper>
		</WrapperBody>
		<FooterDefault title={'LET´S GO'} action={redirect}/>
	  </Container>
  )
}

export default SelectRoot
