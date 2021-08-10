import { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import ProductCard from "../components/ProductCard";
import Container from "../Layout/Container";
import imageUrlBuilder from "@sanity/image-url";

export default function Home({ products }) {
  const [mappedProducts, setMappedProducts] = useState([]);

  useEffect(() => {
    if (products.length) {
      const imgBuilder = imageUrlBuilder({
        projectId: "pwa9amt7",
        dataset: "production",
      });

      setMappedProducts(
        products.map((product) => {
          return {
            ...product,
            mainImage: imgBuilder
              .image(product.mainImage)
              .width(163)
              .height(205),
          };
        })
      );
    } else {
      setMappedProducts([]);
    }
  }, [products]);

  return (
    <>
      <Head>
        <title>Timi Idowu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <div className={styles.contentContainer}>
          <div id="#about">
            <h1 className={styles.introHeader}>growth designer</h1>
            <p className={styles.introBody}>
              based in Ibadan, Nigeria. I combine growth design with my flair
              for product design to drive growth outcomes
            </p>
            <p className={styles.introSubHeading}>
              Currently availabe for collaboration, but i’ll be off work form
              july 2020 to december 2021
            </p>
          </div>

          <div id="#work" className={styles.productsSection}>
            <div className={styles.productsIntro}>
              <h2>products</h2>
              <p>
                I listed out each of this problems and wrote several possible
                solutions under them
              </p>
            </div>

            {mappedProducts.length ? (
              mappedProducts.map(
                ({ mainImage, title, description, is__showcase }, idx) => (
                  <ProductCard
                    key={idx}
                    image={mainImage}
                    title={title}
                    description={description}
                    linkText={is__showcase ? "see showcase" : "view case study"}
                  />
                )
              )
            ) : (
              <>No Projects Yet </>
            )}
          </div>
        </div>
      </Container>
    </>
  );
}

export const getServerSideProps = async (pageContext) => {
  const projectId = process.env.SANITY_PROJECT_ID;
  const query = encodeURIComponent('*[ _type == "product" ]');
  const url = `https://${projectId}.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then((res) => res.json());

  if (!result.result || !result.result.length) {
    return {
      props: {
        products: [],
      },
    };
  } else {
    return {
      props: {
        products: result.result,
      },
    };
  }
};
