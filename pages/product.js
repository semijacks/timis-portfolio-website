import Head from "next/head";
import Link from "next/link";
import ProductCard from "../components/ProductCard";
import { products } from "../utils/products";
import Container from "../Layout/Container";
import styles from "../styles/Product.module.css";
import ArrowIcon from "../public/icons/ArrowIcon";

export default function Product() {
  return (
    <>
      <Head>
        <title>Timi Idowu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <div className={styles.contentContainer}>
          <div className={styles.productIntro}>
            <h2>Inawo</h2>
            <p>
              an event engagement product that helps people create social events
              and engage with their guests
            </p>
          </div>
          <div className={styles.grid}>
            <div>
              <img
                src="https://via.placeholder.com/288x148"
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
                  <li>Art Direction</li>
                  <li>UX Design</li>
                  <li>Art Direction</li>
                  <li>UX Direction</li>
                </ul>
              </div>
              <div className={styles.list}>
                <h3>Collaborators</h3>
                <ul>
                  <li>Timi Idowu (Me)</li>
                  <li>Adeleke Basit</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.researchSection}>
            <div className={styles.researchIntro}>
              <h3>research</h3>
              <p>
                I listed out each of this problems and wrote several possible
                solutions under them
              </p>
            </div>
            <div className={styles.researchGallery}>
              <img
                src="https://via.placeholder.com/286x254"
                alt="product image"
                className="productImage"
              />
              <img
                src="https://via.placeholder.com/286x254"
                alt="product image"
                className="productImage"
              />
              <img
                src="https://via.placeholder.com/286x254"
                alt="product image"
                className="productImage"
              />
            </div>
            <div className={styles.descriptionAndLink}>
              <p>
                I listed out each of this problems and wrote several possible
                solutions under them
              </p>
              <div className={styles.siteLink}>
                <ArrowIcon />
                <Link href="/">
                  <a>see docs</a>
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.userTypesSection}>
            <h3>user types</h3>
            <div className={styles.userTypesGallery}>
              <img
                src="https://via.placeholder.com/163x205"
                alt="product image"
                className="productImage"
              />
              <img
                src="https://via.placeholder.com/163x205"
                alt="product image"
                className="productImage"
              />
              <img
                src="https://via.placeholder.com/163x205"
                alt="product image"
                className="productImage"
              />
              <img
                src="https://via.placeholder.com/163x205"
                alt="product image"
                className="productImage"
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
