import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Footer from '../footer/Footer';
import styles from '../layout/layout.module.css';
import Navbar from '../navbar/Navbar';

export default function Layout({ children, textColor, BgColor }) {
	return (
		<Container fluid className={styles.layout} style={{ backgroundColor: `${BgColor}` }}>
			<Navbar textColor={textColor} />
			<main>
				<Row>{children}</Row>
			</main>
			<Footer textColor={textColor} />
		</Container>
	);
}
