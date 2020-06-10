import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout/Layout';
import BackgroundImage from 'gatsby-background-image';
import styles from '../pages/index.module.css';
import { Col, Row } from 'react-bootstrap';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
	query {
		allContentfulHomePageBackground {
			nodes {
				backgroundImage {
					fluid(quality: 90, maxWidth: 4000) {
						...GatsbyContentfulFluid
					}
				}
			}
		}
	}
`;

export default function Home() {
	const data = useStaticQuery(query);

	return (
		<Layout>
			<Col>
				<Row className={styles.magazineHolder}>
					<Col xs={11} sm={5} className={styles.magazine}>
						Hello
					</Col>
				</Row>
			</Col>
		</Layout>
	);
}
