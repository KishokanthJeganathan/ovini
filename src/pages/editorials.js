import React from 'react';
import styles from '../pages/editorials.module.css';
import Layout from '../components/layout/Layout';
import { Col, Row } from 'react-bootstrap';
import { graphql, useStaticQuery } from 'gatsby';
import EditorialItemHolder from '../components/editorialItemHolder/EditorialItemHolder';
import Seo from '../components/Seo';

const query = graphql`
	query {
		allContentfulEditorialItems(sort: { fields: order, order: ASC }) {
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
		allContentfulEditorialPageMeta {
			nodes {
				metaDescription
				metaImageLink
			}
		}
	}
`;

export default function Editorials() {
	const data = useStaticQuery(query);

	const { metaDescription, metaImageLink } = data.allContentfulEditorialPageMeta.nodes[0];

	return (
		<Layout BgColor="black" textColor="white">
			<Seo title="Editorials" description={metaDescription} image={metaImageLink} />
			<Col className={styles.editorials}>
				{data.allContentfulEditorialItems.nodes.map((item) => (
					<EditorialItemHolder src={item.coverPicture.fluid} name={item.name} slug={item.slug} />
				))}
			</Col>
		</Layout>
	);
}
