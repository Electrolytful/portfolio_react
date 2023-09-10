import styles from "./index.module.scss";
import { useInView } from "react-intersection-observer";

import { ProjectList } from "../../components";

export default function Projects() {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
  });

  return (
    <section className={styles.projects}>
      <h2
        ref={titleRef}
        className={`${styles.projects_title} ${
          titleInView ? styles.projects_title___visible : ""
        }`}
      >
        <span>P</span>rojects
      </h2>
      <ProjectList />
    </section>
  );
}
