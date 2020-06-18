import React from 'react';
import Layout from '../components/layout/Layout';
import { Col, Row } from 'react-bootstrap';
import styles from '../pages/contact.module.css';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import Seo from '../components/Seo';

const query = graphql`
	query {
		contentfulContactPageImage {
			image {
				fluid {
					...GatsbyContentfulFluid
				}
				title
			}
		}
		allContentfulContactPageImage {
			nodes {
				metaDescription
				metaImageLink
			}
		}
	}
`;

export default function Contact() {
	const data = useStaticQuery(query);

	const { metaDescription, metaImageLink } = data.allContentfulContactPageImage.nodes[0];

	return (
		<Layout>
			<Seo title="Contact Us" description={metaDescription} image={metaImageLink} />
			<Col className={styles.contact}>
				<Row className={styles.contactContentHolder}>
					<Col xs={12} sm={7} md={7} lg={5}>
						<Img
							fluid={data.contentfulContactPageImage.image.fluid}
							alt={data.contentfulContactPageImage.title}
						/>
					</Col>
					<Col sm={5} md={5} g={5} className={styles.formHolder}>
						<p className={styles.invite}>
							TO REQUEST FOR A CUSTOM ORDER OR COMMISSION-BASED PIECES, INQUIRE ABOUT A COLLABORATION, OR
							SIMPLY SAY HELLO, FILL IN THE FORM BELOW.
						</p>
						<form action="https://formspree.io/kishokanthjeganathan@gmail.com" method="POST">
							<label htmlFor="first name">NAME</label> <br />
							<input type="text" name="first name" aria-label="first name" className={styles.input} />
							<br />
							<label htmlFor="email">WHERE CAN I REACH YOU?</label> <br />
							<input type="email" name="email" aria-label="email" className={styles.input} /> <br />
							<label htmlFor="subject">SUBJECT</label> <br />
							<input type="text" name="subject" aria-label="subject" className={styles.input} /> <br />
							<label htmlFor="messege">MESSAGE</label> <br />
							<textarea name="messege" rows="4" aria-label="message" className={styles.input} />
							<br />
							<input type="submit" value="Send" aria-label="send" className={styles.btn} />
						</form>
					</Col>
				</Row>
			</Col>
		</Layout>
	);
}
