import React from "react";
import Link from "next/link";
import styles from "../styles/ProductCard.module.css";
import ArrowIcon from "../public/icons/ArrowIcon";

const Product = ({ image, title, description, linkText }) => {
  return (
    <div className={styles.product}>
      <div className={styles.productCard}>
        <img src={image} alt="product image" className="productImage" />
        <div className={styles.productCardText}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className={styles.productLink}>
        <ArrowIcon />
        <Link href="/product">
          <a>{linkText}</a>
        </Link>
      </div>
    </div>
  );
};

export default Product;
