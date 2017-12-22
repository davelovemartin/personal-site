import React from 'react'
import styled from 'styled-components'

import {
  Box,
  Flex,
  Text
} from 'rebass'

const CustomText = styled(Text)`
  white-space: pre-wrap;
  letter-spacing: 1px;
  font-weight: 300;
`

const Content = props => (
  <Flex>
    <Box
      mx='auto'
      mb={1}
      w={[360, 540, 640, 640]}
    >
      <CustomText
        f={[1, 2, 3, 3]}
        p={1}
        children={props.children}
        justify
      />
    </Box>
  </Flex>
)

export default Content
