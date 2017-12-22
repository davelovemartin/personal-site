import React from 'react'

import {
  Container
} from 'rebass'

const CustomContainer = props => (
  <Container
    mx='auto'
    mb={1}
    w={[320, 540, 640, 640]}
    {...props}
  />
)

export default CustomContainer
