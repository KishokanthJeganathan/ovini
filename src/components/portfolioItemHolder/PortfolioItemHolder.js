import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Img from 'gatsby-image';
import styles from '../portfolioItemHolder/portfolioItemHolder.module.css';
import { Link } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export default function PortfolioItemHolder({ image, name, slug }) {
	return (
		<Col xs={12}>
			<AniLink
				to={`/portfolio/${slug.toLowerCase()}`}
				className={styles.link}
				duration={1}
				swipe
				top="entry"
				entryOffset={100}
			>
				<Row className={styles.portfolioItemHolder}>
					<Col xs={12} sm={6} md={6} className={styles.portfolioItemImage}>
						<Img fluid={image} />
					</Col>
					<Col xs={12} sm={6} md={4} className={styles.portfolioNameHolder}>
						<h2 className={styles.portfolioName}>{name.toUpperCase()}</h2>
					</Col>
				</Row>
			</AniLink>
		</Col>
	);
}
