import styles from './index.module.scss';

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.about_content}>
          <div className={styles.about_title}>
            <h2>About <span className={`block`}>Me</span></h2>
          </div>
          <hr />
          <div className={styles.about_description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsum magnam enim tempora at tempore eum saepe odit eligendi placeat repellat, ab ex fugit nemo neque. Officiis voluptatum dicta saepe.
            </p>
          </div>
      </div>
    </section>
  );
}
