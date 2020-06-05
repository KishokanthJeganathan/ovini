import React from 'react';
import { Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout/Layout';
import BackgroundImage from 'gatsby-background-image';

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
			<BackgroundImage
				fluid={backgroundImage}
				style={{ height: '102vh', width: '100%', marginTop: '-3rem', zIndex: '-1' }}
			/>
		</Layout>
	);
}
