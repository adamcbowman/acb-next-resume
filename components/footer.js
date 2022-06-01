import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="flex flex-col text-center">
        <a
          href="http://acbconsulting.tech/"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} ACB Consulting <br/>
            <span className="text-xs">ACB Consulting is also me :)</span>
          </p>
        </a>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="pt-4"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
