import React from 'react';
import Layout from '../components/layout/Layout';
import { Col, Row } from 'react-bootstrap';
import styles from '../pages/sizing.module.css';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
	query {
		allContentfulSizingPage(sort: { fields: order, order: ASC }) {
			nodes {
				size
				hip
				bust
				waist
			}
		}
	}
`;

export default function Sizing() {
	const data = useStaticQuery(query);
	console.log(data);
	return (
		<Layout>
			<Col>
				<Row className={styles.sizingContentHolder}>
					<Col xs={11} sm={5}>
						<h1 className={styles.h1}>SIZING & MEASUREMENTS</h1>
					</Col>
					<Col xs={11} sm={5}>
						<Row>
							{data.allContentfulSizingPage.nodes.map((node) => (
								<span>
									<Col xs={12} className={styles.sizeInformation}>
										<h2>{node.size}</h2>
										<p>
											BUST {node.bust} CM | WAIST {node.waist} CM | HIP {node.hip} CM
										</p>
									</Col>
								</span>
							))}
						</Row>
					</Col>
				</Row>
			</Col>
		</Layout>
	);
}
