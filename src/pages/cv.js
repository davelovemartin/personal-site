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

class Cv extends React.Component {
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
            title="Dave Martin"
            subtitle='Resumé'
            image={node.sizes}
          />
        )).value()}
        <CustomSection>
          <CustomContainer>
            <Content
              children='2016 – 2017 MSc Innovation and Applied Entrepreneurship (University of the West of England, Bristol)'
            />
            <Content
              children='2015 – 2016 School for Social Entrepreneurs: Start-up Programme'
            />
            <Content
              children='2011 – 2015 BSc Web Design (HONS) – 1st Class (University of the West of England, Bristol)'
            />
            <Content
              children='2010 – 2011 FSc Internet Technologies – Distinction (University of Plymouth/ City of Bristol College)'
            />
            <Content
              children='2010 PRINCE2 Practitioner'
            />
            <Content
              children='2010 LEAN 6-Sigma Green Belt'
            />
            <Content
              children='2007 Level 4: Counselling Skills (City of Bristol College)'
            />
            <Content
              children='1995 – 1997 A Levels (Filton College)'
            />
            <Content
              children='1992 – 1995 GCSEs (Bristol Grammar School)'
            />
          </CustomContainer>
        </CustomSection>
        <Footer />
      </div>
    )
  }
}

export default Cv

export const query = graphql`
  query CvQuery {
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
