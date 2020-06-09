import React from 'react';
import { graphql, Link } from 'gatsby';
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
			<Col xs={12} hee className={styles.editorialItemPage}>
				<h1>{nameOfEditorialItem}</h1>
				<ImageSlider images={imagesForFullEditorial} />
			</Col>
		</Layout>
	);
}
