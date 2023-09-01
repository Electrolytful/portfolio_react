import styles from "./index.module.scss";

import { ProjectList } from "../../components";

export default function Projects() {
  return (
    <section className={styles.projects}>
      <h2>
        <span>P</span>rojects
      </h2>
      <ProjectList />
    </section>
  );
}
