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
		{
			resolve: `gatsby-plugin-gdpr-cookies`,
			options: {
				googleAnalytics: {
					trackingId: 'UA-171046795-1', // leave empty if you want to disable the tracker
					cookieName: 'gatsby-gdpr-google-analytics', // default
					anonymize: true, // default
					head: true,
					respectDNT: true,
					pageTransitionDelay: 0
				},
				// defines the environments where the tracking should be available  - default is ["production"]
				environments: [ 'production', 'development' ]
			}
		},

		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: process.env.CONTENTFUL_SOURCE_ID,
				// Learn about environment variables: https://gatsby.dev/env-vars
				accessToken: process.env.CONTENTFUL_ACESS_TOKEN
			}
		},
		{
			resolve: `gatsby-plugin-canonical-urls`,
			options: {
				siteUrl: `https://www.ovinistudio.com`
			}
		},
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				host: 'https://www.ovinistudio.com',
				sitemap: 'https://www.ovinistudio.com/sitemap.xml',
				policy: [ { userAgent: '*', allow: '/' } ]
			}
		},
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-transition-link`
	]
};
