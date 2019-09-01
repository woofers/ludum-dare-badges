const json = require('./package.json')

const { name, description, author } = json

module.exports = {
  siteMetadata: {
    title: name,
    description,
    author
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    'gatsby-plugin-material-ui',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name,
        short_name: name,
        start_url: `/`,
        background_color: `#3d4752`,
        theme_color: `#ffa500`,
        display: `minimal-ui`,
        icon: `static/favicon.ico`,
      }
    }
  ]
}
