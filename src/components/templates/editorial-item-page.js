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
					...GatsbyContentfulFluid
				}
			}
		}
	}
`;

export default function EditorialItemPage({ data }) {
	console.log(data);

	const { imagesForFullEditorial, nameOfEditorialItem } = data.contentfulEditorialItems;
	return (
		<Layout BgColor="black" textColor="white">
			<Col xs={12} className={styles.editorialItemPage}>
				<Row className={styles.editorialItemPageRow}>
					<Col xs={12} className={styles.h1Holder}>
						<h1 className={styles.h1}>{nameOfEditorialItem.toUpperCase()}</h1>
					</Col>
					<Col xs={12} className={styles.swipe}>
						<p className={styles.p}>SWIPE THE PAGES. </p>
					</Col>
					<Col xs={12} className={styles.swipe}>
						<p>HOVER TO PAUSE </p>
					</Col>
					<ImageSlider images={imagesForFullEditorial} name={nameOfEditorialItem} />
				</Row>
			</Col>
		</Layout>
	);
}
