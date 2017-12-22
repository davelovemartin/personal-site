import React from 'react'
import styled from 'styled-components'
import * as Scroll from 'react-scroll'
import Link, { navigateTo } from 'gatsby-link'
import {
  Button,
  Drawer,
  Fixed,
  Flex,
  NavLink,
  Toolbar
} from 'rebass'
import Hide from 'hidden-styled'

var _ = require('lodash')
let ScrollLink = Scroll.Link

const CustomFixed = styled(Fixed)`
  z-index: 2;
`

const CustomLink = styled(Link)`
  color: gold;
  text-decoration: none;
  transition: color 0.1s ease;
  &:hover {
    color: #4FC6BC;
    text-decoration: underline;
    text-decoration-skip: ink;
  }
  &:active {
    color: #CF72B9;
  }
`

class Navbar extends React.Component {
  constructor (props) {
    super(props)
    this.state = { open: false }
  }
  render () {
    return (
      <CustomFixed
        width={'100%'}
      >
        <Hide xs sm>
          <nav role='navigation'>
            <Toolbar
              color='gold'
              bg='none'
            >
              <NavLink
                ml={3}
                mr='auto'
                is='div'
                fontSize={2}
              >
                <CustomLink
                  to={'/'}
                  children={'DAVE MARTIN'}
                  color={'gold'}
                />
              </NavLink>
              <NavLink
                mr={2}
                is='div'
                fontSize={2}
              >
                <CustomLink
                  to={'/blog/'}
                  children={'blog'}
                />
              </NavLink>
              <NavLink
                mr={2}
                is='div'
                fontSize={2}
              >
                <CustomLink
                  to={'/portfolio/'}
                  children={'portfolio'}
                />
              </NavLink>
            </Toolbar>
          </nav>
        </Hide>
        <Hide md lg>
          <Button
            children='Toggle Drawer'
            bg='gold'
            color='black'
            f={3}
            onClick={() => this.setState({ open: !this.state.open })}
          >
              MENU
          </Button>
          <Drawer
            open={this.state.open}
            onClick={() => this.setState({ open: !this.state.open })}
            position='right'
            p={3}
            color='gold'
            bg='black'>
            <nav role='navigation'>
              <Flex
                direction='column'
              >
                <NavLink
                  mr='auto'
                  is='div'
                  fontSize={2}
                >
                  <CustomLink
                    to={'/'}
                    children={'DAVE MARTIN'}
                    color={'gold'}
                  />
                </NavLink>
                <NavLink
                  is='div'
                  fontSize={2}
                  mr={2}
                >
                  <CustomLink
                    to={'/blog/'}
                    children={'blog'}
                  />
                </NavLink>
                <NavLink
                  is='div'
                  fontSize={2}
                  mr={2}
                >
                  <CustomLink
                    to={'/portfolio/'}
                    children={'portfolio'}
                  />
                </NavLink>
              </Flex>
            </nav>
          </Drawer>
        </Hide>
      </CustomFixed>
    )
  }
}

export default Navbar
