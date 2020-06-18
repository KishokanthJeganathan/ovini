import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout/Layout';
import BackgroundImage from 'gatsby-background-image';
import styles from '../pages/index.module.css';
import { Col, Row } from 'react-bootstrap';
import { graphql, useStaticQuery } from 'gatsby';
import Seo from '../components/Seo';

const query = graphql`
	query {
		allContentfulHomePageBackground {
			nodes {
				metaDescription
				metaImageLink
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

	const { metaDescription, metaImageLink } = data.allContentfulHomePageBackground.nodes[0];

	return (
		<Layout>
			<Seo title="Home" description={metaDescription} image={metaImageLink} />
			<Col>
				<Row className={styles.magazineHolder}>
					<Col xs={12} sm={7} lg={5} className={styles.magazine}>
						<BackgroundImage
							fluid={data.allContentfulHomePageBackground.nodes[0].backgroundImage.fluid}
							className={styles.backgroundImage}
							style={{ height: '100%' }}
						/>
					</Col>
				</Row>
			</Col>
		</Layout>
	);
}
{
	/* <BackgroundImage
							fluid={data.allContentfulHomePageBackground.nodes[0].backgroundImage.fluid}
							className={styles.backgroundImage}
							style={{ height: '90vh' }}
						>
							Hello
						</BackgroundImage>  */
}
