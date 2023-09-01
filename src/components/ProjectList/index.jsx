import styles from "./index.module.scss";
import Project from "../Project";

export default function ProjectList() {
  const DUMMY_DATA = [
    {
      id: 1,
      title: "Title 1",
      details: "Details 1",
      skills: ["Skill 1", "Skill 2", "Skill 3"],
      picture_url: "images/hero_bg.jpg",
    },
    {
      id: 2,
      title: "Title 2",
      details: "Details 2",
      skills: ["Skill 1", "Skill 2", "Skill 3"],
      picture_url: "images/hero_bg.jpg",
    },
    {
      id: 3,
      title: "Title 3",
      details: "Details 3",
      skills: ["Skill 1", "Skill 2", "Skill 3"],
      picture_url: "images/hero_bg.jpg",
    },
    {
      id: 4,
      title: "Title 4",
      details: "Details 4",
      skills: ["Skill 1", "Skill 2", "Skill 3"],
      picture_url: "images/hero_bg.jpg",
    },
  ];

  return (
    <ul className={styles.list}>
      {DUMMY_DATA.map((project) => {
        return (
          <li key={project.id}>
            <Project
              title={project.title}
              details={project.details}
              skills={project.skills}
              picture_url={project.picture_url}
            />
          </li>
        );
      })}
    </ul>
  );
}
