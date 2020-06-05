import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Footer from '../footer/Footer';
import styles from '../layout/layout.module.css';
import Navbar from '../navbar/Navbar';

export default function Layout({ children }) {
	return (
		<Container fluid className={styles.layout}>
			<Navbar />
			<Row>{children}</Row>
			<Footer />
		</Container>
	);
}
