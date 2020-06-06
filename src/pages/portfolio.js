import React from 'react';
import Layout from '../components/layout/Layout';
import { Col, Row } from 'react-bootstrap';
import styles from '../pages/portfolio.module.css';

export default function Portfolio() {
	return (
		<Layout BgColor="black" textColor="white">
			<Col className={styles.background}>
				<Row>
					<Col xs={12} sm={6}>
						picture
					</Col>
					<Col xs={12} sm={6}>
						picture
					</Col>
				</Row>
			</Col>
		</Layout>
	);
}
