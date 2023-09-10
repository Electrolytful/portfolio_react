import styles from "./index.module.scss";
import Project from "../Project";

import { useInView } from "react-intersection-observer";
import { useProject } from "../../context/projectContext";

export default function ProjectList() {
  const projectCtx = useProject();
  const { ref: listRef, inView: listInView } = useInView({ triggerOnce: true });

  return (
    <ul ref={listRef} className={styles.list}>
      {projectCtx.projects.map((project) => {
        return (
          <li
            key={project.id}
            className={`${styles.list_item} ${
              listInView ? styles.list_item___visible : ""
            }`}
          >
            <Project
              title={project.title}
              details={project.details}
              skills={project.skills}
              picture_url={project.picture_url}
              git_link={project.git_link}
            />
          </li>
        );
      })}
    </ul>
  );
}
