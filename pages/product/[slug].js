import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Container from "../../Layout/Container";
import styles from "../../styles/Product.module.css";
import ArrowIcon from "../../public/icons/ArrowIcon";
import imgBuilder from "../../utils/imageBuilder";

const Product = ({
  title,
  description,
  previewImage,
  thingsIDid,
  collaborators,
  section1HeaderText,
  section1BodyText,
  section1SnippetText,
  section2HeaderText,
  section1Images,
  section2Images,
}) => {
  return (
    <>
      <Head>
        <title>Timi Idowu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <div className={styles.contentContainer}>
          <div className={styles.productIntro}>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <div className={styles.grid}>
            <div>
              <img
                src={imgBuilder.image(previewImage).width(288).height(148)}
                alt="product image"
                className="productImage"
              />
              <div className={styles.siteLink}>
                <ArrowIcon />
                <Link href="/">
                  <a>open site</a>
                </Link>
              </div>
            </div>
            <div className={styles.lists}>
              <div className={styles.list}>
                <h3>Things I did</h3>
                <ul>
                  {thingsIDid.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.list}>
                <h3>Collaborators</h3>
                <ul>
                  {collaborators.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.researchSection}>
            <div className={styles.researchIntro}>
              <h3>{section1HeaderText}</h3>
              <p>{section1BodyText}</p>
            </div>
            <div className={styles.researchGallery}>
              {section1Images.map((image, idx) => (
                <img
                  key={idx}
                  src={imgBuilder.image(image).width(286).height(254)}
                  alt="product image"
                  className="productImage"
                />
              ))}
            </div>
            <div className={styles.descriptionAndLink}>
              <p>{section1SnippetText}</p>
              <div className={styles.siteLink}>
                <ArrowIcon />
                <Link href="/">
                  <a>see docs</a>
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.userTypesSection}>
            <h3>{section2HeaderText}</h3>
            <div className={styles.userTypesGallery}>
              {section2Images.map((image, idx) => (
                <img
                  key={idx}
                  src={imgBuilder.image(image).width(163).height(205)}
                  alt="product image"
                  className="productImage"
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export const getServerSideProps = async (pageContext) => {
  const projectId = process.env.SANITY_STUDIO_API_PROJECT_ID;
  const pageSlug = pageContext.query.slug;

  if (!pageSlug) {
    return {
      notFound: true,
    };
  }

  const query = encodeURIComponent(
    `*[ _type == "product" && slug.current == "${pageSlug}"]`
  );
  const url = `https://${projectId}.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then((res) => res.json());
  const product = result.result[0];

  if (!product) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        title: product.title,
        description: product.description,
        mainImage: product.mainImage,
        previewImage: product.sitePreviewImage,
        thingsIDid: [...product.thingsIDid],
        collaborators: [...product.collaborators],
        section1HeaderText: product.section1HeaderText,
        section1BodyText: product.section1BodyText,
        section1SnippetText: product.section1SnippetText,
        section2HeaderText: product.section2HeaderText,
        section1Images: [...product.section1Images],
        section2Images: [...product.section2Images],
      },
    };
  }
};

export default Product;
