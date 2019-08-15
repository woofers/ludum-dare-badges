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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name,
        short_name: name,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/favicon.ico`,
      }
    }
  ]
}
