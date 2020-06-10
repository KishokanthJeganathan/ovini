import React from 'react';
import styles from '../pages/editorials.module.css';
import Layout from '../components/layout/Layout';
import { Col, Row } from 'react-bootstrap';

import { graphql, useStaticQuery } from 'gatsby';
import EditorialItemHolder from '../components/editorialItemHolder/EditorialItemHolder';

const query = graphql`
	query {
		allContentfulEditorialItems {
			nodes {
				slug
				name: nameOfEditorialItem
				coverPicture: coverPictureOfEditorialItem {
					fluid {
						...GatsbyContentfulFluid
					}
				}
			}
		}
	}
`;

export default function Editorials() {
	const data = useStaticQuery(query);
	return (
		<Layout BgColor="black" textColor="white">
			<Col className={styles.editorials}>
				{data.allContentfulEditorialItems.nodes.map((item) => (
					<EditorialItemHolder src={item.coverPicture.fluid} name={item.name} slug={item.slug} />
				))}
			</Col>
		</Layout>
	);
}
