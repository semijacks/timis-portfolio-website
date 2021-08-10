import React from "react";

export default Card = ({ image, title, description }) => {
  return (
    <div className={styles.productCard}>
      <img src={image} alt="product image" className="productImage" />
      <div className={styles.productCardText}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
