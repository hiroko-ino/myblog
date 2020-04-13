const env = process.env.NODE_ENV || 'development';
require('dotenv').config({path: `./.env.${env}`}); 

const config = (process.env.NODE_ENV === 'development') ? {
  spaceId: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN,
  host: 'preview.contentful.com'
} : {
  spaceId: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN
}

module.exports = {
  siteMetadata: {
    title: `type:any`,
    description: `Write some article about Front-end.`,
    author: `hiroko ino`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        ...config
      },
    },
  ],
}
