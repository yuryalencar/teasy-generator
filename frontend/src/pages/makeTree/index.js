import React from 'react'
import { Container, Header, Wrapper, WrapperBody } from './styles'
import NavDefault from '../../components/navDefault'
import FooterDefault from '../../components/footerDefault'
import { useHistory } from 'react-router-dom'
import Description from '../../components/description'
import { GitBranch, GitCommit, GitMerge } from 'react-feather'
import ActionTree from '../../components/makeTreeAction'
import Divider from '../../components/divider'
import Node from "../../components/node";

const MakeTree = () => {
  let history = useHistory()
  
  const redirect = () => {
    history.push('/makeTree')
  }
  return (
    <Container>
      <NavDefault/>
      <WrapperBody>
        <Description icon={<GitBranch/>} title={'INSERT A NEW PAGE MAKING A RELATIONSHIP WITH ACTIONS'}/>
        <Wrapper>
          <Header>
            <GitMerge/>
            <div>
              <h3>PAGINA HOME</h3>
              <small>Define the children of the routes to be applied</small>
            </div>
          </Header>
          <ActionTree title={'HOME PAGE'}/>
          <ActionTree title={'HOME PAGE'}/>
          <ActionTree title={'HOME PAGE'}/>
         
          <Node/>
        </Wrapper>
      </WrapperBody>
      <FooterDefault title={'LET´S GO'} action={redirect}/>
    </Container>
  )
}

export default MakeTree
