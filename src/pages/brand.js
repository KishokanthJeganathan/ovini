import React from 'react';
import Layout from '../components/layout/Layout';
import { Col, Row } from 'react-bootstrap';
import styles from '../pages/brand.module.css';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
	{
		allContentfulBrandPageContent(sort: { fields: orderOfContent, order: ASC }) {
			nodes {
				tittle
				orderOfContent
				content {
					content
				}
			}
		}
	}
`;

export default function Brand() {
	const data = useStaticQuery(query);

	return (
		<Layout>
			<Col>
				<Row className={styles.content}>
					{data.allContentfulBrandPageContent.nodes.map((node) => (
						<Col xs={11} md={5} className={styles.contentHolder}>
							<h2 className={styles.title}>{node.tittle.toUpperCase()}</h2>
							<p className={styles.text}>{node.content.content}</p>
						</Col>
					))}
				</Row>
			</Col>
		</Layout>
	);
}
