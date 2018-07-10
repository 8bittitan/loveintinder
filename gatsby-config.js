const nib = require('nib')

const config = {
  siteMetadata: {
    title: 'Love In Tinder',
    meta: [
      {
        name: 'description',
        content:
          "Love In Tinder is a podcast where we talk about bullshit, and also occasionally talk about relationships. This is what it's like being single, or in a relationship, as a 20 something in the age of Tinder.",
      },
      { name: 'keywords', content: 'love, tinder, relationships' },
    ],
    socials: {
      twitter: '',
      instagram: '',
      facebook: '',
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-stylus',
      options: {
        use: [nib()],
      },
    },
    {
      resolve: 'gatsby-source-rss-fork',
      options: {
        rssURL: 'http://loveintinder.libsyn.com/rss',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images/`,
      },
    },
  ],
}

if (process.env.NODE_ENV === 'production') {
  config.plugins.push({
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: 'Love in Tinder',
      short_name: 'LIT',
      start_url: '/',
      background_color: '#C5C6B7',
      theme_color: '#D0A341',
      display: 'minimal-ui',
      icon: 'src/images/logo.png',
    },
  })
  config.plugins.push('gatsby-plugin-offline')
}

module.exports = config
