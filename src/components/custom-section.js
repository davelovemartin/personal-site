import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.div`
  background-image: linear-gradient(to bottom, #020202, #1d1b3f);
  padding-bottom: 48px;
  margin-bottom: 0;
`

const CustomSection = props => (
  <main id='content' role='main' tabindex='-1'>
    <StyledSection
      {...props}
    />
  </main>
)

export default CustomSection
