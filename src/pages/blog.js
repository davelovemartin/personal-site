import React from 'react'
import styled from 'styled-components'
import CustomHelmet from '../components/helmet'
import CustomSection from '../components/custom-section'
import CustomContainer from '../components/custom-container'
import Header from '../components/header'
import Footer from '../components/footer'
import { navigateTo } from 'gatsby-link'

import {
  Link,
  Subhead,
  Text
} from 'rebass'

const CustomLink = styled(Link)`
  color: #FFCC00;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.1s ease;
  &:hover {
    color: #4FC6BC;
  }
  &:active {
    color: #CF72B9;
  }
`

class Blog extends React.Component {
  render () {
    return (
      <div>
        <CustomHelmet
          title={this.props.data.site.siteMetadata.title}
          description={this.props.data.site.siteMetadata.description}
          googleSiteVerification={this.props.data.site.siteMetadata.googleSiteVerification}
          url={this.props.data.site.siteMetadata.url}
          location={this.props.location.pathname}
        />
        {_.chain(this.props.data.allContentfulAsset.edges).filter(['node.id', 'c3Cutoijvr2si44I4uWuoIk']).map(({node}) => (
          <Header
            key={node.id}
            title="Dave's Blog"
            subtitle='Book reviews, website walkthroughs & more'
            image={node.sizes}
          />
        )).value()}
        <CustomSection>
          <CustomContainer>
            {this.props.data.allContentfulPost.edges.map(({ node }) => (
              <CustomLink
                onClick={() => navigateTo('/blog/' + node.slug)}
              >
                <Subhead
                  pt={2}
                  center
                  fontSize={4}
                  fontWeight={300}
                  mt={2}
                  mb={1}
                  children={node.title}
                />
                <Text
                  center
                  fontSize={[1, 2, 3, 3]}
                  fontWeight={300}
                  fontStyle={'italic'}
                  children={node.description}
                  mb={4}
                />
              </CustomLink>
            ))}
          </CustomContainer>
        </CustomSection>
        <Footer />
      </div>
    )
  }
}

export default Blog

export const query = graphql`
  query BlogQuery {
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
    allContentfulPost {
      edges {
        node {
          slug
          title
          description
        }
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
