require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitleAlt: `SHY Toys`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
      
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SHY Toys - Stephanie and Hannah Kid Influencers`,
        short_name: `SHY.Toys`,
        description: `We are 7 year old twin YouTubers who love toys and having fun`,
        start_url: `https://shy.toys`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-theme-ui`,

  ],
}
