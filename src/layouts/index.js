import React from 'react'
import palx from 'palx'
import { Provider } from 'rebass'
import { injectGlobal } from 'styled-components'

injectGlobal`
  * {
    box-sizing: border-box;
  }
  html, body {
    height: 100%;
    font-size: 16px;
    line-height: 1.5;
  }
  body {
    margin: 0;
    background-color: #010101;
    color: white;
    text-shadow: 0 1px 1px #000000;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: "Playfair Display", serif;
    font-weight: 700;
    font-style: italic;
  }
  h3 {
    font-size: 32px;
  }
  @media screen and (min-width: 64em) {
    h3 {
      font-size: 64px;
    }
  }
  @media screen and (min-width: 80em) {
    h3 {
      font-size: 90px;
    }
  }
  blockquote {
    font-family: "Playfair Display", serif;
    font-size: 64px;
    font-style: italic;
    font-weight: 300;
    margin-bottom: 24px;
    margin-top: 24px;
  }
  p, a, li, small, input, button, label {
    font-family: "Raleway", sans-serif;
    font-weight: 300;
  }
  hr {
    border: 0;
    height: 1px;
    background-image: -webkit-linear-gradient(left, #FFCC00, #4FC6BC, #CF72B9);
    background-image: -moz-linear-gradient(left, #FFCC00, #4FC6BC, #CF72B9);
    background-image: -ms-linear-gradient(left, #FFCC00, #4FC6BC, #CF72B9);
    background-image: -o-linear-gradient(left, #FFCC00, #4FC6BC, #CF72B9);
    margin-bottom: 62px;
    margin-top: 23px;
  }
  p, li {
    font-size: 16px;
    letter-spacing: 1px;
    margin: 12px 0;
  }
  a {
    color: #FFCC00;
    text-decoration: underline;
    text-decoration-skip: ink;
    transition: color 0.1s ease;
  }
  a:hover {
    color: #4FC6BC;
  }
  a:active {
    color: #CF72B9;
  }
  article > section > p > img, article > p > img {
    width: 100%;
    padding-bottom: 18px;
  }
  article > section > p, article > p {
    padding: 18px 0;
    text-align: justify;
  }
`

const palette = palx('#8371C1')

const flattened = Object.keys(palette)
   .reduce((a, key) => {
     const value = palette[key]
     if (Array.isArray(value)) {
       a[key] = value[5]
       value.forEach((val, i) => {
         a[key + i] = val
       })
     } else {
       a[key] = value
     }
     return a
   }, {})

export const colors = Object.assign({}, flattened, {
  black: '#0D111F',
  gold: '#FFCC00',
  cerise: '#CF72B9',
  white: '#F1F7F8 '
})

const TemplateWrapper = props => (
  <Provider
    theme={{
      breakpoints: [ 32, 48, 64, 80 ],
      fontSize: [11, 16, 22, 32, 45, 64, 90, 128, 181],
      colors: colors,
      radius: 4,
      space: [ 0, 8, 16, 32, 64, 128, 256 ]
    }}
  >
    {props.children()}
  </Provider>
)

export default TemplateWrapper
