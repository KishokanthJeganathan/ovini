const path = require(`path`);
exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const { data } = await graphql(`{
        allContentfulPortfolioItems {
          edges {
            node {
              nameOfPortfolioItem
            }
          }
        }
      }`);

	data.allContentfulPortfolioItems.edges.forEach(({ node }) => {
		createPage({
			path: `portfolio/${node.nameOfPortfolioItem}`,
			component: path.resolve('./src/components/templates/portfolio-item-page.js'),
			context: { slug: node.nameOfPortfolioItem }
		});
	});
};
