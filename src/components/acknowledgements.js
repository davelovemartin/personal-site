import React from 'react'
import styled from 'styled-components'
import {
    Text
 } from 'rebass'

const Attributions = styled.div`
    & a img {
        width: 6rem;
        height: 6rem;
        margin: 1rem;
    }
`

const Acknowledgements = props => (
    <Text
        center
        mt={2}
    >
        <span>Dave Martin &copy; 2018. </span>
        <span>Built with <a target="__blank" href="https://facebook.github.io/react/">React</a> &amp; <a target="__blank" href="http://gatsbyjs.org/">Gatsby.js</a></span>
        <Attributions>
            <a href="https://www.contentful.com/" target="_blank" rel="noopener noreferrer">
                <img src="https://images.contentful.com/fo9twyrwpveg/7F5pMEOhJ6Y2WukCa2cYws/398e290725ef2d3b3f0f5a73ae8401d6/PoweredByContentful_DarkBackground.svg" alt="Powered by Contentful" />
            </a>
            <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">
                <img src="https://d33wubrfki0l68.cloudfront.net/534ab499b9c56e50ea3fc1558b5edffa6d7117f5/df399/static/netlify.ac20e7df.svg" alt="Hosted on Netlify" />
            </a>
        </Attributions>
    </Text>    
)

export default Acknowledgements