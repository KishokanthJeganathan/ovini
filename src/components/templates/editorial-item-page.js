import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../layout/Layout';
import { Col, Row } from 'react-bootstrap';
import styles from '../templates/portfolioItemPage.module.css';

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
	return <Layout>Hello</Layout>;
}
