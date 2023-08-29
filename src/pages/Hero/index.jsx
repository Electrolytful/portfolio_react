import styles from "./index.module.scss";

export default function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.hero__background}></div>
      <div className={styles.hero__content}>
        <img src="images/hero_picture.jpg" alt="Picture of me" />
        <h1>Erhan Ulusal</h1>
        <h2>Web Developer</h2>
        <ul className={styles.hero__icons}>
          <li onClick={() => window.open("https://twitter.com/electrolytful", "_blank")}>
            <i className="fa-brands fa-twitter"></i>
          </li>
          <li onClick={() => window.open("https://github.com/Electrolytful", "_blank")}>
            <i className="fa-brands fa-github"></i>
          </li>
          <li onClick={() => window.open("https://www.linkedin.com/in/erhan-002", "_blank")}>
            <i className="fa-brands fa-linkedin"></i>
          </li>
        </ul>
      </div>
    </header>
  );
}
