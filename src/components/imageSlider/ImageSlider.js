import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Img from 'gatsby-image';
import styles from '../imageSlider/imageSlider.module.css';
import BackgroundImage from 'gatsby-background-image';

export default function ImageSlider({ images }) {
	const settings = {
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		swipeToSlide: true,
		adaptiveHeight: true,
		dots: true
	};
	return (
		<div className={styles.row}>
			<Slider {...settings}>
				{images.map((image) => (
					<div>
						<Img fluid={image.fluid} className={styles.images} />
					</div>
				))}
			</Slider>
		</div>
	);
}
