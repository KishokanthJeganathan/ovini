import React from 'react';
import styles from '../footer/footer.module.css';
import { Row, Col } from 'react-bootstrap';
import FooterLinks from '../../constants/FooterLinks';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'gatsby';

export default function Footer({ textColor }) {
	return (
		<footer className={styles.footer}>
			<Row>
				<Col className={styles.footerContentHolder} xs={12}>
					<ul className={styles.ul}>
						{FooterLinks.map((link) => (
							<li className={styles.li} key={uuidv4()}>
								<Link className={styles.link} to={link.path} style={{ color: `${textColor}` }}>
									{link.text}
								</Link>
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
							hello@ovini.com
						</a>
					</p>
					<p className={styles.phone} style={{ color: `${textColor}` }}>
						+48 608656435
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
