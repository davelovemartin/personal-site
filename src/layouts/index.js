import React from 'react'
import palx from 'palx'
import { Provider } from 'rebass'
import { injectGlobal } from 'styled-components'

require('prismjs/themes/prism-twilight.css')

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
  @font-face {
      font-family: 'Raleway';
      src: url('/fonts/raleway-light.eot');
      src: url('/fonts/raleway-light.eot?#iefix') format('embedded-opentype'),
           url('/fonts/raleway-light.woff2') format('woff2'),
           url('/fonts/raleway-light.woff') format('woff'),
           url('/fonts/raleway-light.ttf') format('truetype');
      font-weight: 300;
      font-style: normal;

  }
  @font-face {
      font-family: 'Raleway';
      src: url('/fonts/raleway-lightitalic.eot');
      src: url('/fonts/raleway-lightitalic.eot?#iefix') format('embedded-opentype'),
           url('/fonts/raleway-lightitalic.woff2') format('woff2'),
           url('/fonts/raleway-lightitalic.woff') format('woff'),
           url('/fonts/raleway-lightitalic.ttf') format('truetype');
      font-weight: 300;
      font-style: italic;

  }
  @font-face {
      font-family: 'Playfair Display';
      src: url('/fonts/playfairdisplay-bolditalic.eot');
      src: url('/fonts/playfairdisplay-bolditalic.eot?#iefix') format('embedded-opentype'),
           url('/fonts/playfairdisplay-bolditalic.woff2') format('woff2'),
           url('/fonts/playfairdisplay-bolditalic.woff') format('woff'),
           url('/fonts/playfairdisplay-bolditalic.ttf') format('truetype');
      font-weight: 700;
      font-style: italic;

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
  a:focus {
    background-color: #ffbf47;
    color: #4c2c92;
    outline: 3px solid #ffbf47;
  }
  article > section > p > img, article > p > img {
    width: 100%;
    padding-bottom: 18px;
  }
  article > section > p, article > p {
    padding: 18px 0;
    text-align: justify;
  }
  #skip-to-content {
    padding: 1em;
    position: absolute;
    top: -120px;
    left: 1em;
    z-index: 1000;
    color: white;
  }
  #skip-to-content:focus {
    position: absolute;
    top: 0;
    background: #222;
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
