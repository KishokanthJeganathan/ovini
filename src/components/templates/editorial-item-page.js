import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout/Layout';
import { Col, Row, Carousel } from 'react-bootstrap';
import styles from '../templates/editorialItemPage.module.css';
import Img from 'gatsby-image';
import { v4 as uuidv4 } from 'uuid';

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
					<Col xs={12} className={styles.swipe}>
						<p className={styles.p}>SWIPE THE PAGES. </p>
					</Col>
					<Col xs={12} className={styles.swipe}>
						<p>HOVER TO PAUSE </p>
					</Col>
					<Col className={styles.row} xs={12}>
						<Carousel xs={12} className={styles.carousal} indicators={false} fade={true}>
							{imagesForFullEditorial.map((image) => (
								<Carousel.Item key={uuidv4()}>
									<Img fluid={image.fluid} className={styles.images} />
								</Carousel.Item>
							))}
						</Carousel>
					</Col>
				</Row>
			</Col>
		</Layout>
	);
}
