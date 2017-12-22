import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.div`
  background-image: linear-gradient(to bottom, #020202, #1d1b3f);
  padding-bottom: 48px;
  margin-bottom: 0;
`

const CustomSection = props => (
  <StyledSection
  {...props}
  />
)

export default CustomSection
