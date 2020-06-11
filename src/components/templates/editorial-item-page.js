import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout/Layout';
import { Col, Row, Carousel } from 'react-bootstrap';
import styles from '../templates/editorialItemPage.module.css';
import Img from 'gatsby-image';
import { v4 as uuidv4 } from 'uuid';
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
	const { imagesForFullEditorial, nameOfEditorialItem } = data.contentfulEditorialItems;

	return (
		<Layout BgColor="black" textColor="white">
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
