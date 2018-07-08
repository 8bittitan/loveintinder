const nib = require('nib')

module.exports = {
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
    'gatsby-plugin-offline',
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
