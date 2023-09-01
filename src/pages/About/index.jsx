import styles from './index.module.scss';

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.about_content}>
          <div className={styles.about_title}>
            <h2>About <span>Me</span></h2>
          </div>
          <hr />
          <div className={styles.about_description}>
            <p>
              Welcome to my portfolio website! I am a passionate web developer with a focus on creating beautiful and seamless UI. My current tech stack includes: <span>React</span>.js, <span>Express</span>.js, <span>PostgreSQL</span>, <span>Node</span>.js, <span>CSS/SCSS</span> and <span>HTML5</span>.<br /><br />After graduating university with a degree in Software Engineering, I took on a full-stack web development course at La Fosse Academy where I discovered my passion for web development. I hope to develop websites that will make a positive impact on people's lives.
            </p>
          </div>
      </div>
    </section>
  );
}
