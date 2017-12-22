import React from 'react'
import ContactForm from './contact-form.js'

import {
  Container,
  Heading,
  Text
} from 'rebass'

import styled from 'styled-components'

const StyledDiv = styled.div`
  background: #1d1b3f
`

const Footer = props => (
  <StyledDiv>
    <Container
      pt={[2, 3, 4, 4]}
      pb={[2, 3, 4, 4]}
      w={[360, 540, 640, 640]}
    >
      <header>
        <Text
          children='If you would like to talk shop, please&hellip;'
          f={[1, 2, 3, 3]}
          p={1}
        />
        <Heading
          is={'h4'}
          children={'Send me a message'}
          color={'gold'}
          f={[3, 3, 5, 6]}
          mb={4}
          p={1}
        />
      </header>
      <section>
        <ContactForm />
      </section>
    </Container>
  </StyledDiv>
)

export default Footer
