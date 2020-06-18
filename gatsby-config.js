/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
	/* Your site config here */
	siteMetadata: {
		title: 'Ovini',
		titleTemplate: '%s | Ovini',
		description: 'Welcome to Ovini, an independent fashion label based in Melbourne, Australia',
		siteUrl: 'https://ovini.netlify.app', // No trailing slash allowed!
		image: 'https://i.ibb.co/Rc0rDCs/Ovini-com.jpg',
		twitterUsername: '@kishojegan',
		author: 'Ovini Hewawasam'
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-transition-link`,
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: process.env.CONTENTFUL_SOURCE_ID,
				// Learn about environment variables: https://gatsby.dev/env-vars
				accessToken: process.env.CONTENTFUL_ACESS_TOKEN
			}
		}
	]
};
