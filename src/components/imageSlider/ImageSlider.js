import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Img from 'gatsby-image';
import styles from '../imageSlider/imageSlider.module.css';
import { Col, Row, Carousel } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

export default function ImageSlider({ images }) {
	return (
		<Col className={styles.row} xs={12}>
			<Carousel xs={12} className={styles.carousal} indicators={false} fade={true}>
				{images.map((image) => (
					<Carousel.Item>
						<Img fluid={image.fluid} className={styles.images} />
					</Carousel.Item>
				))}
			</Carousel>
		</Col>
	);
}
