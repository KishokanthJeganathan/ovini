import React from 'react';
import Layout from '../components/layout/Layout';
import { Col, Row } from 'react-bootstrap';
import styles from '../pages/contact.module.css';

export default function contact() {
	return (
		<Layout>
			<Col>
				<Row>
					<Col xs={12} sm={6}>
						image
					</Col>
					<Col sm={6}>
						<form action="https://formspree.io/kishokanthjeganathan@gmail.com" method="POST">
							<label htmlFor="first name">Your Name</label> <br />
							<input type="text" name="first name" aria-label="first name" className={styles.input} />
							<br />
							<label htmlFor="email">Where can I reach you?</label> <br />
							<input type="email" name="email" aria-label="email" className={styles.input} /> <br />
							<label htmlFor="subject">Subject</label> <br />
							<input type="text" name="subject" aria-label="subject" className={styles.input} /> <br />
							<label htmlFor="messege">Message</label> <br />
							<textarea name="messege" rows="4" aria-label="message" className={styles.input} />
							<br />
							<input type="submit" value="Send" aria-label="send" />
						</form>
					</Col>
				</Row>
			</Col>
		</Layout>
	);
}
