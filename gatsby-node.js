const path = require(`path`);
exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const { data } = await graphql(`{
        allContentfulPortfolioItems {
          edges {
            node {
            slug
            }
          }
        }
      }`);

	data.allContentfulPortfolioItems.edges.forEach(({ node }) => {
		createPage({
			path: `portfolio/${node.slug}`,
			component: path.resolve('./src/components/templates/portfolio-item-page.js'),
			context: { slug: node.slug }
		});
	});
};
