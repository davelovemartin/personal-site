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
      { name: 'google-site-verification', content: props.googleSiteVerification },
      { property: 'fb:app_id', content: props.fbAppId },
      { property: 'og:url', content: props.url },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: props.title },
      { property: 'og:description', content: props.description },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { name: 'og:image:type', content: 'image/jpeg' },
      { property: 'og:image', content: props.facebookImage },
      { property: 'og:image:url', content: props.facebookImage },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: props.twitter },
      { name: 'twitter:title', content: props.title },
      { name: 'twitter:description', content: props.description },
      { name: 'twitter:image', content: props.preview }
    ]}
    link={[
      { rel: 'alternate', href: props.location, hreflang: 'en-uk' },
      { rel: 'canonical', href: props.location },
      { rel: 'shortcut icon', href: 'https://justan0therdave.github.io/favicon.ico'}
    ]}
  >
    <script type='application/ld+json'>{`
      '@context': 'http://schema.org',
      '@type': 'Person',
      'name' : 'Dave Martin',
      'url': 'https://justan0therdave.github.io',
      'sameAs' : [
        'http://www.facebook.com/justanotherdavemartin',
        'http://www.twitter.com/justan0therdave'
      ]
    `}</script>
  </Helmet>
)

export default CustomHelmet
