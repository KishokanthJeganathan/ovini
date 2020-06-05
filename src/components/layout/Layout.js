import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../footer/Footer';
import styles from '../layout/layout.module.css';
import Navbar from '../navbar/Navbar';

export default function Layout({ children }) {
	return (
		<Container fluid className={styles.layout}>
			<Navbar />
			{children}
			<Footer />
		</Container>
	);
}
