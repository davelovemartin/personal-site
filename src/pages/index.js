import React from 'react'
import styled from 'styled-components'
import { navigateTo } from 'gatsby-link'
import * as Scroll from 'react-scroll'
import CustomHelmet from '../components/helmet'
import Header from '../components/header'
import CustomSection from '../components/custom-section'
import CustomContainer from '../components/custom-container'
import Content from '../components/content'
import Footer from '../components/footer'
import {
  Link,
  Text
} from 'rebass'

let Element = Scroll.Element

const CustomText = styled(Text)`
  white-space: pre-wrap;
  letter-spacing: 1px;
  font-weight: 300;
`

const CustomLink = styled(Link)`
  color: #FFCC00;
  cursor: pointer;
  display: inline;
  text-decoration: underline;
  text-decoration-skip: ink;
  transition: color 0.1s ease;
  &:hover {
    color: #4FC6BC;
  }
  &:active {
    color: #CF5255;
  }
`
var _ = require('lodash')

class Index extends React.Component {
  render () {
    console.log(this.props)
    return (
      <div>
        <CustomHelmet
          title={this.props.data.site.siteMetadata.title}
          description={this.props.data.site.siteMetadata.description}
          googleSiteVerification={this.props.data.site.siteMetadata.googleSiteVerification}
          fbAppId={this.props.data.site.siteMetadata.fbAppId}
          url={this.props.data.site.siteMetadata.url}
          facebookImage={''}
          twitter={this.props.data.site.siteMetadata.twitter}
          preview={''}
          location={this.props.location.pathname}
        />
        {_.chain(this.props.data.allContentfulAsset.edges).filter(['node.id', 'c3Cutoijvr2si44I4uWuoIk']).map(({node}) => (
          <Header
            key={node.id}
            title="Hello! I'm Dave"
            subtitle='I make Websites, Web Apps & Prototypes'
            image={node.sizes}
          />
        )).value()}
        <CustomSection>
        <Element
          name='about'
          id='about'
        />
          <CustomContainer>
            <Content
              children='Hello World!'
            />
            <Content
              children="I'm Dave, a web developer living in Bristol."
            />
            <Content
              children='I love playing the guitar, drinking good coffee and trail running... but not all at the same time.'
            />
            <CustomText
              f={[1, 2, 3, 3]}
              justify
              mb={1}
              p={1}>The internet is a playground where we connect people. To make these links, I craft dynamic <CustomLink onClick={() => navigateTo('/portfolio/')}>apps</CustomLink>, <CustomLink onClick={() => navigateTo('/portfolio/')}>websites</CustomLink> and <CustomLink onClick={() => navigateTo('/portfolio/')}>prototypes</CustomLink> that are fast, are accessible, and solve real user problems.
            </CustomText>
            <Content
              mb={1}
              children='I make Progressive Web Applications by taking a mobile first approach, writing semantic HTML and enhancing with JavaScript (Vanilla, React and Node).  I also enjoy reflective writing, copyrighting, and editing.'
            />
            <CustomText
              f={[1, 2, 3, 3]}
              justify
              mb={1}
              p={1}>Check out my <CustomLink onClick={() => navigateTo('/cv/')}>CV</CustomLink>, my <CustomLink onClick={() => navigateTo('/portfolio/')}>portfolio</CustomLink> and the musings on my <CustomLink onClick={() => navigateTo('/blog/')}>blog</CustomLink>.
            </CustomText>
          </CustomContainer>
        </CustomSection>
        <Footer />
      </div>
    )
  }
}

export default Index

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
        googleSiteVerification
        fbAppId
        twitter
        url
      }
    }
    allContentfulAsset {
      edges {
        node {
          id
          title
          sizes(maxHeight: 600) {
            ...GatsbyContentfulSizes
          }
        }
      }
    }
  }
`
