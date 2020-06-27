import React from 'react';
import styles from '../footer/footer.module.css';
import { Row, Col } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { Link, graphql, useStaticQuery } from 'gatsby';

const query = graphql`
	query {
		allContentfulContactUsInfo {
			nodes {
				emailAddress
				phone
			}
		}
	}
`;

export default function Footer({ textColor }) {
	const data = useStaticQuery(query);

	const { emailAddress, phone } = data.allContentfulContactUsInfo.nodes[0];

	return (
		<footer className={styles.footer}>
			<Row>
				<Col xs={12}>
					<p className={styles.email}>
						<a
							href="mailto:hello@ovini.com"
							className={styles.emailAddress}
							style={{ color: `${textColor}` }}
						>
							{emailAddress}
						</a>
					</p>
					<p className={styles.phone} style={{ color: `${textColor}` }}>
						{phone}
					</p>
					<p className={styles.phone} style={{ color: `${textColor}` }}>
						<a
							href="https://www.kishokanth.com/"
							className={styles.emailAddress}
							style={{ color: `${textColor}` }}
							target="blank"
							rel="noopener noreferrer"
						>
							Design and Code by Kishokanth
						</a>
					</p>
				</Col>
			</Row>
		</footer>
	);
}
