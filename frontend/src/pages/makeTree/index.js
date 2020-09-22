import React, { useContext } from 'react'
import { Container, Header, Wrapper, WrapperBody } from './styles'
import NavDefault from '../../components/navDefault'
import FooterDefault from '../../components/footerDefault'
import { useHistory } from 'react-router-dom'
import Description from '../../components/description'
import { GitBranch, GitCommit, GitMerge } from 'react-feather'
import ActionTree from '../../components/makeTreeAction'
import Divider from '../../components/divider'
import Node from "../../components/node";
import { JsonContext } from "../../context";

const MakeTree = () => {
  const { pages, tree } = useContext(JsonContext)
  let history = useHistory()

  const redirect = () => {
    history.push('/makeTree')
  }
  return (
    <Container>
      <NavDefault />
      <WrapperBody>
        <Description icon={<GitBranch />} title={'INSERT A NEW PAGE MAKING A RELATIONSHIP WITH ACTIONS'} />
        <Wrapper>
          <Header>
            <GitMerge />
            <div>
              <h3>{tree.root.name}</h3>
              <small>Define the children of the routes to be applied</small>
            </div>
          </Header>
          {tree && tree.root.actions.map((action, i) => {
            return (
              <ActionTree key={i} keyword={action.keyword} />
            )
          })}
          {/* <Node /> */}
        </Wrapper>
      </WrapperBody>
      <FooterDefault title={'LET´S GO'} action={redirect} />
    </Container>
  )
}

export default MakeTree
