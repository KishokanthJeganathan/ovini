import React, { useState } from 'react';
import styles from '../navbar/navbar.module.css';
import { Link } from 'gatsby';
import { GiCancel, GiHamburgerMenu } from 'react-icons/Gi';
import Links from '../../constants/Links';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';

export default function Navbar() {
	const [ active, setActive ] = useState(false);

	return (
		<header>
			<Col>
				<Row>
					<Col className={styles.fullscreenNav}>
						<Row>
							<Col>
								<Link to="/" className={styles.brand}>
									OVINI - Haute Couture
								</Link>
							</Col>
							<Col sm={8}>
								<nav>
									<ul className={styles.fullscreenNavUl}>
										{Links.map((link) => (
											<li className={styles.fullscreenNavLi} key={uuidv4()}>
												<Link className={styles.fullscreenNavLink} to={link.path}>
													{link.text}
												</Link>
											</li>
										))}
									</ul>
								</nav>
							</Col>
						</Row>
					</Col>
					{/* code in the below Col handles everything to do with the navbar when under 768 px */}
					<Col className={styles.mobileNav}>
						<Row className={styles.mobileNavRow}>
							<Col xs={10} className={styles.mobileBrandHolder}>
								<Link to="/" className={styles.brand}>
									OVINI - Haute Couture
								</Link>
							</Col>
							<Col xs={2} className={styles.hamburgerHolder}>
								<GiHamburgerMenu className={styles.hamburgerMenu} onClick={() => setActive(!active)} />
								<nav
									// I opted to use inline styles here to make sure I could change the transform property with the active state. Might not be pretty but it got the job done
									style={{
										position: 'fixed',
										top: '0',
										right: '0',
										bottom: '0',
										left: '0',
										backgroundColor: 'black',
										display: 'flex',
										justifyContent: 'center',
										alignContent: 'center',
										overflowY: 'auto',
										transform: `${active ? 'scale(1)' : 'scale(0)'}`,
										transition: '0.5s'
									}}
								>
									<ul className={styles.ul}>
										{Links.map((link) => (
											<li className={styles.li} key={uuidv4()}>
												<Link className={styles.link} to={link.path}>
													{link.text}
												</Link>
											</li>
										))}
										<li>
											<GiCancel className={styles.cancel} onClick={() => setActive(!active)} />
										</li>
									</ul>
								</nav>
							</Col>
						</Row>
					</Col>
				</Row>
			</Col>
		</header>
	);
}
