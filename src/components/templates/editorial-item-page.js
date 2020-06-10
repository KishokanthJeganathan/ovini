import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout/Layout';
import { Col, Row } from 'react-bootstrap';
import styles from '../templates/editorialItemPage.module.css';
import ImageSlider from '../imageSlider/ImageSlider';

export const query = graphql`
	query($slug: String) {
		contentfulEditorialItems(slug: { eq: $slug }) {
			nameOfEditorialItem
			slug
			imagesForFullEditorial {
				fluid {
					src
				}
			}
		}
	}
`;

export default function EditorialItemPage({ data }) {
	console.log(data);

	const { imagesForFullEditorial, nameOfEditorialItem } = data.contentfulEditorialItems;
	return (
		<Layout>
			<Col xs={12} className={styles.editorialItemPage}>
				<Row>
					<Col xs={12} className={styles.h1Holder}>
						<h1 className={styles.h1}>{nameOfEditorialItem.toUpperCase()} EDITORIAL</h1>
					</Col>
					<ImageSlider images={imagesForFullEditorial} />
				</Row>
			</Col>
		</Layout>
	);
}
