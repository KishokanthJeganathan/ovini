import React from 'react';
import styles from '../footer/footer.module.css';
import { Row, Col } from 'react-bootstrap';
import FooterLinks from '../../constants/FooterLinks';
import { v4 as uuidv4 } from 'uuid';
import { Link, graphql, useStaticQuery } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

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
				<Col className={styles.footerContentHolder} xs={12}>
					<ul className={styles.ul}>
						{FooterLinks.map((link) => (
							<li className={styles.li} key={uuidv4()}>
								<AniLink
									duration={1}
									swipe
									top="entry"
									entryOffset={100}
									className={styles.link}
									to={link.path}
									style={{ color: `${textColor}` }}
								>
									{link.text}
								</AniLink>
							</li>
						))}
					</ul>
				</Col>
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
