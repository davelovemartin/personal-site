import React from 'react'
import CustomHelmet from '../components/helmet'
import CustomSection from '../components/custom-section'
import CustomContainer from '../components/custom-container'
import Header from '../components/header'
import Footer from '../components/footer'
import {
  Small
} from 'rebass'
var _ = require('lodash')

class Post extends React.Component {
  render () {
    return (
      <div>
        <CustomHelmet
          title={this.props.data.site.siteMetadata.title}
          description={this.props.data.site.siteMetadata.description}
          url={this.props.data.site.siteMetadata.siteUrl}
          twitter={this.props.data.site.siteMetadata.twitter}
          location={this.props.location.pathname}
        />
        {_.chain(this.props.data.allContentfulAsset.edges).filter(['node.id', 'c3Cutoijvr2si44I4uWuoIk']).map(({node}) => (
          <Header
            key={node.id}
            title={this.props.data.contentfulPost.title}
            subtitle={this.props.data.contentfulPost.subtitle}
            image={node.sizes}
          />
        )).value()}
        <CustomSection>
          <CustomContainer>
            <Small
              children={this.props.data.markdownRemark.timeToRead + ' minutes reading time'}
            />
            <article role='article' dangerouslySetInnerHTML={{ __html: this.props.data.markdownRemark.html }} />
          </CustomContainer>
        </CustomSection>
        <Footer />
      </div>
    )
  }
}

export default Post

export const query = graphql`
  query PostQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
        twitter
        siteUrl
      }
    }
    contentfulPost(slug: { eq: $slug } ) {
      slug
      title
      subtitle
    }
    markdownRemark {
      html
      timeToRead
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
