import React from 'react';
import Layout from '../components/layout/Layout';
import styles from '../pages/portfolio.module.css';
import { graphql, useStaticQuery } from 'gatsby';
import PortfolioItemHolder from '../components/portfolioItemHolder/PortfolioItemHolder';
import { Col, Row } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const query = graphql`
	query {
		allContentfulPortfolioItems {
			nodes {
				image: portfolioItemCoverPhoto {
					fluid {
						...GatsbyContentfulFluid
					}
				}
				name: nameOfPortfolioItem
			}
		}
	}
`;

export default function Portfolio() {
	const data = useStaticQuery(query);

	return (
		<Layout BgColor="black" textColor="white">
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
