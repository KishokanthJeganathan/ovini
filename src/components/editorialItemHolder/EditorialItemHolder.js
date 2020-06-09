import React from 'react';
import styles from '../editorialItemHolder/editorialItemHolder.module.css';
import { Col, Row } from 'react-bootstrap';
import Img from 'gatsby-image';

export default function editorialItemHolder({ src, name }) {
	return (
		<Col xs={12}>
			<Row className={styles.row}>
				<Col xs={12} sm={5} lg={4} className={styles.editorialItemHolder}>
					<Img fluid={src} />
				</Col>
				<Col xs={12} sm={3} className={styles.nameHolder}>
					<h2 className={styles.name}>{name.toUpperCase()}</h2>
				</Col>
			</Row>
		</Col>
	);
}
