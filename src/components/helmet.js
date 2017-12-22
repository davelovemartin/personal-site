import React from 'react'
import Helmet from 'react-helmet'

const CustomHelmet = props => (
  <Helmet
    title={props.title}
    meta={[
      { charset: 'utf-8' },
      { name: 'description', content: props.description },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'google-site-verification', content: props.googleSiteVerification }
    ]}
    link={[
      { rel: 'alternate', href: props.location, hreflang: 'en-uk' },
      { rel: 'canonical', href: props.location },
      { rel: 'shortcut icon', href: 'https://www.justan0therdave.online/favicon.ico'}
    ]}
  >
    <script type='application/ld+json'>{`
      '@context': 'http://schema.org',
      '@type': 'Person',
      'name' : 'Dave Martin',
      'url': 'https://justan0therdave.github.io',
      'sameAs' : [
        'http://www.twitter.com/justan0therdave'
      ]
    `}</script>
  </Helmet>
)

export default CustomHelmet
