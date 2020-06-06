import React from 'react';
import Layout from '../components/layout/Layout';
import { Col } from 'react-bootstrap';
import styles from '../pages/portfolio.module.css';

export default function Portfolio() {
	return (
		<Layout>
			<Col className={styles.background}>hello</Col>
		</Layout>
	);
}
