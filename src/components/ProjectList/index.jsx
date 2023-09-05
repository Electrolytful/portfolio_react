import styles from "./index.module.scss";
import Project from "../Project";

import { useProject } from '../../context/projectContext';

export default function ProjectList() {
  const projectCtx = useProject();

  return (
    <ul className={styles.list}>
      {projectCtx.projects.map((project) => {
        return (
          <li key={project.id}>
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
