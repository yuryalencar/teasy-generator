import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: center;
  width: 100vw;
  height: 100vh;
`

export const WrapperBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 75%;
  padding: 20px;
  flex-wrap: nowrap;
  overflow: auto;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-right: 10px;
  flex-wrap: nowrap;
  overflow: auto;
`