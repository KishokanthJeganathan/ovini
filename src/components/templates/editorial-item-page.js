import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout/Layout';
import { Col, Row } from 'react-bootstrap';
import styles from '../templates/editorialItemPage.module.css';
import ImageSlider from '../imageSlider/ImageSlider';
import Seo from '../Seo';

export const query = graphql`
	query($slug: String) {
		contentfulEditorialItems(slug: { eq: $slug }) {
			nameOfEditorialItem
			slug
			metaDescription
			metaImageLink
			imagesForFullEditorial {
				fluid {
					...GatsbyContentfulFluid
				}
			}
		}
	}
`;

export default function EditorialItemPage({ data }) {
	const {
		imagesForFullEditorial,
		nameOfEditorialItem,
		metaDescription,
		metaImageLink
	} = data.contentfulEditorialItems;

	return (
		<Layout BgColor="black" textColor="white">
			<Seo
				title={nameOfEditorialItem[0].toUpperCase() + nameOfEditorialItem.substring(1)}
				description={metaDescription}
				image={metaImageLink}
			/>
			<Col xs={12} className={styles.editorialItemPage}>
				<Row className={styles.editorialItemPageRow}>
					<Col xs={12} className={styles.h1Holder}>
						<h1 className={styles.h1}>{nameOfEditorialItem.toUpperCase()}</h1>
					</Col>
					<Col className={styles.row} xs={12}>
						<ImageSlider images={imagesForFullEditorial} />
					</Col>
				</Row>
			</Col>
		</Layout>
	);
}
