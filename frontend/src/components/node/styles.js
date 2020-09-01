import styled from "styled-components";
import {colors} from "../../styles/global";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  align-content: center;
  width: 100%;
  padding: 15px;
  margin-top: 2px;
`

export const WrapperTitle = styled.div`
  display: flex;
  width: 100%;
  padding-left: 15px;
  align-content: center;
  align-items: center;
`

export const NodeIcon = styled.div`
  display: flex;
  margin-left: 10px;
  margin-right: 10px;

`

export const NodeTitle = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 15px;
  color: ${props => props.color ? colors.activated: 'black'};
`