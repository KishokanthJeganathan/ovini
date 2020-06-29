import React, { useState } from 'react';
import styles from '../imageSlider/imageSlider.module.css';
import Img from 'gatsby-image';
import { Col, Row, Carousel } from 'react-bootstrap';

// you might notice that this component has rather strange names in let, const and functions (products etc). This is as this component was imported from another project. The component however works great so it should pose no issues.

export default function ImageSlider({ images }) {
	const [ products, setProducts ] = useState(images);
	const [ productIndex, setProductIndex ] = useState(0);

	let firstFourProducts = products.slice(productIndex, productIndex + 1);

	const nextProduct = () => {
		const lastProductIndex = products.length - 1;
		const resetProductIndex = productIndex === lastProductIndex;
		const index = resetProductIndex ? 0 : productIndex + 1;
		setProductIndex(index);
	};
	const prevProduct = () => {
		const lastProductIndex = products.length - 1;
		const resetProductIndex = productIndex === 0;
		const index = resetProductIndex ? lastProductIndex : productIndex - 1;
		setProductIndex(index);
	};

	return (
		<Col>
			<Row className={styles.sliderHolder}>
				<Col className={styles.buttonGroup} xs={12} sm={7}>
					<button type="button" className={styles.btn} onClick={prevProduct}>
						Prev
					</button>
					<button type="button" className={styles.btn} onClick={nextProduct}>
						Next
					</button>
				</Col>
				<Col className={styles.productSlider} xs={12} sm={12}>
					<Img fluid={firstFourProducts[0].fluid} className={styles.image} />
				</Col>
			</Row>
		</Col>
	);
}
