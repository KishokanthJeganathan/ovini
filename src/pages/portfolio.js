import React from 'react';
import Layout from '../components/layout/Layout';
import styles from '../pages/portfolio.module.css';
import { graphql, useStaticQuery } from 'gatsby';
import PortfolioItemHolder from '../components/portfolioItemHolder/PortfolioItemHolder';
import { Col, Row } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import Seo from '../components/Seo';

const query = graphql`
	query {
		allContentfulPortfolioItems(sort: { fields: order, order: ASC }) {
			nodes {
				image: portfolioItemCoverPhoto {
					fluid {
						...GatsbyContentfulFluid
					}
				}
				name: nameOfPortfolioItem
			}
		}
		allContentfulPortfolioPageMeta {
			nodes {
				metaDescription
				metaImageLink
			}
		}
	}
`;

export default function Portfolio() {
	const data = useStaticQuery(query);

	const { metaDescription, metaImageLink } = data.allContentfulPortfolioPageMeta.nodes[0];

	return (
		<Layout BgColor="black" textColor="white">
			<Seo title="Portfolio" description={metaDescription} image={metaImageLink} />
			<Col>
				<Row className={styles.portfolio}>
					{data.allContentfulPortfolioItems.nodes.map((node) => (
						<PortfolioItemHolder
							name={node.name}
							image={node.image.fluid}
							slug={node.name}
							key={uuidv4()}
						/>
					))}
				</Row>
			</Col>
		</Layout>
	);
}
