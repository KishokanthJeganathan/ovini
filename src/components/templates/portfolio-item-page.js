import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../layout/Layout';
import { Col, Row } from 'react-bootstrap';
import styles from '../templates/portfolioItemPage.module.css';
import Img from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const query = graphql`
	query($slug: String) {
		contentfulPortfolioItems(slug: { eq: $slug }) {
			portfolioPageImage1 {
				fluid {
					...GatsbyContentfulFluid
				}
				title
			}
			portfolioPageAboutPortfolio {
				portfolioPageAboutPortfolio
			}
			portfolioPageImage2 {
				title
				fluid {
					...GatsbyContentfulFluid
				}
			}
			portfolioPageImage3 {
				title
				fluid {
					...GatsbyContentfulFluid
				}
			}
			portfolioPageImage4 {
				title
				fluid {
					...GatsbyContentfulFluid
				}
			}
			portfolioPageImage5 {
				fluid {
					...GatsbyContentfulFluid
				}
				title
			}
			portfolioPageImage6 {
				fluid {
					...GatsbyContentfulFluid
				}
				title
			}
			portfolioPageImage7 {
				fluid {
					...GatsbyContentfulFluid
				}
				title
			}
			portfolioPageImage8 {
				fluid {
					...GatsbyContentfulFluid
				}
				title
			}
			callToAction
		}
	}
`;
export default function portfolioItemPage({ data }) {
	console.log(data);
	const {
		callToAction,
		portfolioPageAboutPortfolio,
		portfolioPageImage1,
		portfolioPageImage2,
		portfolioPageImage3,
		portfolioPageImage4,
		portfolioPageImage5,
		portfolioPageImage6,
		portfolioPageImage7,
		portfolioPageImage8
	} = data.contentfulPortfolioItems;

	return (
		<Layout>
			<Col>
				<Row>
					<Col>
						<Row className={styles.row}>
							<Col xs={12} lg={5} className={styles.image}>
								<Img fluid={portfolioPageImage1.fluid} />
								<p className={styles.about}>
									{portfolioPageAboutPortfolio.portfolioPageAboutPortfolio}
								</p>
							</Col>
							<Col xs={12} lg={5} className={styles.image2Holder}>
								<Img fluid={portfolioPageImage2.fluid} className={styles.image2} />
							</Col>
							<Col xs={12} sm={5} className={styles.image}>
								<Img fluid={portfolioPageImage3.fluid} />
							</Col>
							<Col xs={12} sm={5} className={styles.image}>
								<Img fluid={portfolioPageImage4.fluid} />
							</Col>
							<Col xs={12} sm={5} className={styles.image}>
								<Img fluid={portfolioPageImage5.fluid} />
							</Col>
							<Col xs={12} sm={5} className={styles.image}>
								<Img fluid={portfolioPageImage6.fluid} />
							</Col>
							<Col xs={12} sm={5} className={styles.image}>
								<Img fluid={portfolioPageImage7.fluid} />
							</Col>
							<Col xs={12} sm={5} className={styles.image}>
								<Img fluid={portfolioPageImage8.fluid} />
							</Col>

							<Col xs={11} sm={10} className={styles.CTAHolder}>
								<p className={styles.CTA}>
									{callToAction}
									<br />
									Interested?
								</p>
								<AniLink
									className={styles.CTALink}
									duration={1}
									swipe
									top="entry"
									entryOffset={100}
									to="contact"
								>
									Let's talk
								</AniLink>
							</Col>
						</Row>
					</Col>
				</Row>
			</Col>
		</Layout>
	);
}
