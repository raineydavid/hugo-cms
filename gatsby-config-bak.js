require(`dotenv`).config({
    path: `.env`,
  })
  
  module.exports = {
    siteMetadata: {
      siteTitleAlt: `Shy.Toys`,
          // Used for the title template on pages other than the index site
          siteTitle: `Shy.Toys`,
          // Default title of the page
          siteTitleAlt: `Shy.Toys`,
          // Can be used for e.g. JSONLD
          siteHeadline: `Stephanie and Hannah are SHY Toys`,
          // Will be used to generate absolute URLs for og:image etc.
          siteUrl: `https://shy.toys`,
          // Used for SEO
          siteDescription: `Stephanie and Hannah are twin KidInfluencers and love sharing their unboxing challenges, travels and general life with the world`,
          // Will be set on the <html /> tag
          siteLanguage: `en`,
          // Used for og:image and must be placed inside the `static` folder
          siteImage: `/banner.jpg`,
          // Twitter Handle
          author: `@raineydav`
    },
    plugins: [
      {
        resolve: `gatsby-theme-cara`,
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
          name: `Shy.Toys`,
          short_name: `shytoys`,
          description: `Shy Toys`,
          start_url: `/`,
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
    ],
  }
  