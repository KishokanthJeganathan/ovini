import React from 'react';
import Layout from '../components/layout/Layout';
import { Col, Row } from 'react-bootstrap';
import styles from '../pages/shipping.module.css';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
	query MyQuery {
		allContentfulShippingPage(sort: { fields: order, order: ASC }) {
			nodes {
				tittle
				order
				content {
					content
				}
			}
		}
	}
`;

export default function Shipping() {
	const data = useStaticQuery(query);

	return (
		<Layout>
			<Col>
				<Row className={styles.shippingContentHolder}>
					<Col xs={11} sm={6} md={5}>
						<h1 className={styles.h1}>HOW WE SHIP YOUR ORDER</h1>
					</Col>
					<Col xs={11} sm={6} md={5}>
						<Row>
							{data.allContentfulShippingPage.nodes.map((node) => (
								<Col xs={12}>
									<h2>{node.tittle.toUpperCase()}</h2>
									<p>{node.content.content}</p>
								</Col>
							))}
						</Row>
					</Col>
				</Row>
			</Col>
		</Layout>
	);
}
