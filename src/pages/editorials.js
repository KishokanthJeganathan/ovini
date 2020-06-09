import React from 'react';
import styles from '../pages/editorials.module.css';
import Layout from '../components/layout/Layout';
import { Col, Row } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

import { graphql, useStaticQuery } from 'gatsby';
import EditorialItemHolder from '../components/editorialItemHolder/EditorialItemHolder';

const query = graphql`
	query {
		allContentfulEditorialItems {
			nodes {
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
	console.log(data);
	return (
		<Layout BgColor="black" textColor="white">
			<Col className={styles.editorials}>
				{data.allContentfulEditorialItems.nodes.map((item) => (
					<EditorialItemHolder src={item.coverPicture.fluid} name={item.name} />
				))}
			</Col>
		</Layout>
	);
}
