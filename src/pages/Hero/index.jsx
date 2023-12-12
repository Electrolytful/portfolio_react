import styles from "./index.module.scss";
import { useState, useEffect } from "react";

export default function Hero() {
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setContentLoaded(true);
    }, 100);
  }, []);

  return (
    <header className={styles.hero}>
      <div className={styles.hero_background}></div>
      <div
        className={`${styles.hero_content} ${
          contentLoaded ? styles.hero_content___visible : ""
        }`}
      >
        <img src="images/hero_picture.jpg" alt="Picture of me" />
        <h1>Erhan Ulusal</h1>
        <h2>Frontend Web Developer</h2>
        <ul className={styles.hero_icons}>
          <li
            onClick={() =>
              window.open("https://github.com/Electrolytful", "_blank")
            }
          >
            <i className="fa-brands fa-github"></i>
          </li>
          <li
            onClick={() =>
              window.open("https://www.linkedin.com/in/erhan-002", "_blank")
            }
          >
            <i className="fa-brands fa-linkedin"></i>
          </li>
        </ul>
      </div>
    </header>
  );
}
