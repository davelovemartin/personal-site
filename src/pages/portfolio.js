import React from 'react'
import CustomHelmet from '../components/helmet'
import Header from '../components/header'
import Img from 'gatsby-image'
import CustomSection from '../components/custom-section'
import CustomContainer from '../components/custom-container'
import Footer from '../components/footer'

import {
  Heading
} from 'rebass'

var _ = require('lodash')

class Portfolio extends React.Component {
  render () {
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
            title='My Portfolio'
            subtitle='A collection of web projects'
            image={node.sizes}
          />
        )).value()}
        <CustomSection>
        {this.props.data.allContentfulProject.edges.map(({ node }) => (
          <CustomContainer
            mb={[2, 3, 4, 4]}
            key={node.id}
          >
            <article>
              <header>
                <Heading
                  is='h3'
                  f={[3, 3, 5, 6]}
                  children={'Project: ' + node.title}
                  mb={[3, 3, 4, 4]}
                  center
                />
                <Img
                  sizes={node.image.sizes}
                  alt={'Mock up of ' + node.title}
                />
              </header>
              <section dangerouslySetInnerHTML={{ __html: node.detail.childMarkdownRemark.html }} />
            </article>
            <hr />
          </CustomContainer>
        ))}
        </CustomSection>
        <Footer />
      </div>
    )
  }
}

export default Portfolio

export const query = graphql`
  query PortfolioQuery {
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
    allContentfulProject {
      edges {
        node {
          id
          title
          image {
            id
            title
            sizes (maxHeight: 600) {
              ...GatsbyContentfulSizes
            }
          }
          detail {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
