require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Antal Residencial`,
    description: `Antal Residencial es una micro-comunidad en Pachuca que prefiere una experiencia de vida consciente y responsable, conectando con las necesidades del mundo actual y la nueva forma de vivir, dignificando los espacios residenciales ofreciendo calidad y experiencias.`,
    author: `bloom studio`,
  },
  flags: {
    DEV_SSR: false,
  },
  plugins: [
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
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `antal`,
        accessToken: `${process.env.PRISMIC_ACCESS_TOKEN}`,
        schemas: {
          inicio: require(`./src/schemas/inicio.json`),
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
        endpoint: `${process.env.MAILCHIMP_URL}`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["UA-168115956-9"],
        pluginConfig: {
          head: true,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
