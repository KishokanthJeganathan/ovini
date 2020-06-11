import React from 'react';
import styles from '../editorialItemHolder/editorialItemHolder.module.css';
import { Col, Row } from 'react-bootstrap';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export default function editorialItemHolder({ src, name, slug }) {
	return (
		<Col xs={12}>
			<AniLink duration={1} swipe top="entry" entryOffset={100} to={`editorials/${slug}`} className={styles.link}>
				<Row className={styles.row}>
					<Col xs={12} sm={5} lg={4} className={styles.editorialItemHolder}>
						<Img fluid={src} />
					</Col>
					<Col xs={12} sm={3} className={styles.nameHolder}>
						<h2 className={styles.name}>{name.toUpperCase()}</h2>
					</Col>
				</Row>
			</AniLink>
		</Col>
	);
}
