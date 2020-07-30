import React from 'react';
import styles from '../footer/footer.module.css';
import { Row, Col } from 'react-bootstrap';
import CookieConsent from 'react-cookie-consent';

export default function Footer({ textColor }) {
	return (
		<footer className={styles.footer}>
			<Col>
				<Row>
					<Col xs={12}>
						<p className={styles.email} style={{ color: `${textColor}` }}>
							<a
								href="https://www.instagram.com/ovini.h/"
								className={styles.emailAddress}
								style={{ color: `${textColor}` }}
								target="blank"
								rel="noopener noreferrer"
							>
								Instagram
							</a>
						</p>
						<p className={styles.phone} style={{ color: `${textColor}` }}>
							<a
								href="https://www.kishokanth.com/"
								className={styles.emailAddress}
								style={{ color: `${textColor}` }}
								target="blank"
								rel="noopener noreferrer"
							>
								Design and Development by Kishokanth
							</a>
						</p>
					</Col>
				</Row>
			</Col>

			<CookieConsent
				style={{ background: 'white', color: 'black' }}
				buttonClasses="m-0 mb-1"
				containerClasses=" text-center"
				expires={365}
				overlay="true"
				cookieName="gatsby-gdpr-google-analytics"
				buttonText="Sure thing"
				buttonWrapperClasses=" text-center container-fluid"
				buttonStyle={{ background: 'white', border: '1px solid black', color: 'black' }}
			>
				Before browsing this website, please agree to our use of 🍪.
			</CookieConsent>
		</footer>
	);
}
