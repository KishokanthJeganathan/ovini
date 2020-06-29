import React from 'react';
import Layout from '../components/layout/Layout';
import { Col, Row } from 'react-bootstrap';
import style from '../pages/404.module.css';
import Seo from '../components/Seo';

export default function ErrorPage() {
	return (
		<Layout>
			<Seo
				title="404"
				description="You appear to have stumbled onto a page that does not exsit"
				image="https://i.ibb.co/hgxd2Y3/Studio-Project.jpg"
			/>
			<Col xs={12}>
				<Row className={style.error}>
					<Col xs={12} md={8}>
						<h1>
							404 <br />
							<br />Hmm, we don't seem to have much to see on this page. Maybe you came here by accident?
						</h1>
					</Col>
				</Row>
			</Col>
		</Layout>
	);
}
