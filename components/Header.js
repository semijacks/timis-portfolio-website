import React from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";

const Header = ({ logoText, links }) => {
  return (
    <div className={styles.header}>
      <div className={styles.headerIcon}>
        <Link href="/">
          <a>{logoText}</a>
        </Link>
      </div>
      <ul className={styles.headerLinks}>
        {links.map((link, idx) => (
          <Link href={`/#${link}`} key={idx}>
            <a>{link}</a>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Header;
