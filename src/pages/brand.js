import React from 'react';
import Layout from '../components/layout/Layout';
import { Col, Row } from 'react-bootstrap';
import styles from '../pages/brand.module.css';
import { graphql, useStaticQuery } from 'gatsby';
import Seo from '../components/Seo';

const query = graphql`
	{
		allContentfulBrandPageContent(sort: { fields: orderOfContent, order: ASC }) {
			nodes {
				tittle
				orderOfContent
				content {
					content
				}
			}
		}
		allContentfulBrandPageMeta {
			nodes {
				metaDescription
				metaImageLink
			}
		}
	}
`;

export default function Brand() {
	const data = useStaticQuery(query);

	const { metaDescription, metaImageLink } = data.allContentfulBrandPageMeta.nodes[0];

	return (
		<Layout>
			<Seo title="The Brand" description={metaDescription} image={metaImageLink} />
			<Col>
				<Row className={styles.content}>
					{data.allContentfulBrandPageContent.nodes.map((node) => (
						<Col xs={11} sm={7} className={styles.contentHolder}>
							<h2 className={styles.title}>{node.tittle.toUpperCase()}</h2>
							<p className={styles.text}>{node.content.content}</p>
						</Col>
					))}
				</Row>
			</Col>
		</Layout>
	);
}
