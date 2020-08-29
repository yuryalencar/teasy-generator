import styled from 'styled-components'
import { colors } from '../../styles/global'

export const Wrapper = styled.div`
   display: flex;
    justify-items: center;
    align-items: center;
    align-content: center;
    padding: 10px;
    font-style: italic;
    font-size: 18px;
    
     small{
     color: ${colors.description};
     margin-left: 10px;
    }
 
`