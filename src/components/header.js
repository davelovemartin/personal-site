import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Navbar from '../components/navbar'

import {
  Absolute,
  Heading,
  Subhead
} from 'rebass'

const CustomImg = styled(Img)`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 96px;
  z-index: -99;
`

const Header = props => (
  <header role='header'
  >
    <CustomImg
      sizes={props.image}
      alt=''
    />
    <Absolute
      top
      left={0}
      right={0}
      pt={[0, 3, 3, 3]}
      width={'100%'}
    >
      <Navbar
        navigation={props.navigation}
      />
      <Heading
        is={'h1'}
        f={[4, 5, 6, 8]}
        pt={[4, 5, 5, 6]}
        children={props.title}
        color={'gold'}
        center
      />
      <Subhead
        color={'gold'}
        fontSize={[3, 3, 4, 6]}
        center
        children={props.subtitle}
        is={'h2'}
        mt={[0, 1, 1, 1]}
        mx={'auto'}
        w={[320, 540, 640, 640]}
      />
    </Absolute>
  </header>
)

export default Header
