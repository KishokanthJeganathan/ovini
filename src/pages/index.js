import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout/Layout';
import BackgroundImage from 'gatsby-background-image';
import styles from '../pages/index.module.css';

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
	const backgroundImage = data.allContentfulHomePageBackground.nodes[0].backgroundImage.fluid;
	return (
		<Layout>
			{/* using inline styles here due to the nature of BackgroundImage */}
			<BackgroundImage
				fluid={backgroundImage}
				style={{
					height: '100vh',
					width: '100%',
					marginTop: '-3rem',
					zIndex: '-1',
					display: 'flex',
					alignItems: 'center'
				}}
			>
				<h1 className={styles.brand}>
					<span className={styles.ovini}>OVINI</span> <br /> HAUTE COUTURE
				</h1>
			</BackgroundImage>
		</Layout>
	);
}
