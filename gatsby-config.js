module.exports = {
  siteMetadata: {
    title:`MindSpac`,
    description:`Personalized, Affordable & Professional Counseling. Call, Text, Phone, or Video options. Schedule an appointment anytime and anywhere. Get help now.`,
    author: `@ashishKumar`,
    siteUrl: `https://mindspac.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-191830063-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true
      }
    },
    {
      resolve: `gatsby-plugin-tawk.to`,
      options: {
        tawkId: "60b20976de99a4282a1a3dc9",
        tawkKey: "1f6rn9uv0",
        // get this from the tawk script widget
        // https://tawk.to/chat/YOUR_TAWK_ID/YOUR_TAWK_KEY
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        name: `Mindspac`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};

