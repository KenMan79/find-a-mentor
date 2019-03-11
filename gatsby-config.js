module.exports = {
  siteMetadata: {
    title: `Coding Coach Alpha`,
    description: `A platform for searching a database of mentors.`,
    author: `@emmawedekind`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#FFF`,
        theme_color: `#69D5B1`,
        display: `minimal-ui`,
        icon: `src/images/coding-coach.png`
      }
    }
  ]
};
