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
				style={{ background: 'white', color: 'grey' }}
				buttonClasses="m-0 d-sm-none"
				containerClasses=" text-center "
				expires={150}
				acceptOnScroll={true}
				acceptOnScrollPercentage={1}
				cookieName="gatsby-gdpr-google-analytics"
				overlay="true"
				buttonText="Sure thing"
				buttonWrapperClasses=" text-center container"
				buttonStyle={{ background: 'white', border: '1px solid grey', color: 'grey' }}
			>
				By browsing this website, you agree to our use of 🍪.
			</CookieConsent>
		</footer>
	);
}
