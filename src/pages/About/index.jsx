import styles from "./index.module.scss";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
  });

  return (
    <section className={styles.about}>
      <div
        ref={contentRef}
        className={`${styles.about_content} ${
          contentInView ? styles.about_content___visible : ""
        }`}
      >
        <div className={styles.about_title}>
          <h2>
            About <span>Me</span>
          </h2>
        </div>
        <div className={styles.about_description}>
          <p>
            Welcome 🙌 I am a passionate frontend web developer based in London,
            England with a focus on creating beautiful and seamless UI. After
            graduating university with a degree in Software Engineering, I
            completed a full-stack web development course where I learnt how to
            use different tools such as React and Sass to create responsive and
            fast UI. I hope to develop websites that will make a positive impact
            on people's lives.
          </p>
          <div className={styles.about_stack}>
            <p>Tech Stack</p>
            <ul>
              <li>
                <i className={`fa-brands fa-react ${styles.icon_react}`}></i>
              </li>
              <li>
                <i className={`fa-brands fa-square-js ${styles.icon_js}`}></i>
              </li>
              <li>
                <i className={`fa-brands fa-html5 ${styles.icon_html}`}></i>
              </li>
              <li>
                <i className={`fa-brands fa-css3-alt ${styles.icon_css}`}></i>
              </li>
              <li>
                <i className={`fa-brands fa-sass ${styles.icon_sass}`}></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
