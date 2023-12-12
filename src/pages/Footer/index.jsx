import styles from "./index.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h2>Developed by Erhan Ulusal</h2>
      <div className={styles.footer_icons}>
        <i
          className="fa-brands fa-github"
          onClick={() => {
            window.open("https://github.com/Electrolytful", "_blank");
          }}
        ></i>
        <i
          className="fa-brands fa-linkedin"
          onClick={() => {
            window.open("https://www.linkedin.com/in/erhan-002", "_blank");
          }}
        ></i>
      </div>
    </footer>
  );
}
