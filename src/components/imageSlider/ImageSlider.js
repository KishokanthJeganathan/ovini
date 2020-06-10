import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Img from 'gatsby-image';
import styles from '../imageSlider/imageSlider.module.css';
import { Col, Row } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

export default function ImageSlider({ images }) {
	const settings = {
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: true,
		infinite: true,
		speed: 500,
		swipeToSlide: true,
		adaptiveHeight: true,
		dots: true,
		responsive: [
			{
				breakpoint: 2500,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};
	return (
		<Col className={styles.row} xs={12}>
			<Slider {...settings}>
				{images.map((image) => (
					<div>
						<Img fluid={image.fluid} className={styles.images} key={uuidv4()} />
					</div>
				))}
			</Slider>
		</Col>
	);
}
