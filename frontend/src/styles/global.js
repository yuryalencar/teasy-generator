import { createGlobalStyle } from 'styled-components'

const colors = {
  primary: '#D9D9D9',
  deactivated: '#cacaca',
  activated: '#4B9A28',
  light_success: '#F4FFED',
  secondary: '#0F546E',
  description: '#707070'
};

const GlobalStyles = createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }
  html{
  font-size: 62.5%;
  }

  html, body, #__next{
  height: 100%;
  }

  body{
  font-family: -apple-system, BlinkMacSystemGont, 'Segoe UI', 
  Roboto, Oxygem, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  overflow: hidden;
  height: 100%;
  background-color: ${colors.primary};
  }
`




export {GlobalStyles, colors}