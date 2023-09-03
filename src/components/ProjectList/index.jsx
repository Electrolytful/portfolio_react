import styles from "./index.module.scss";
import Project from "../Project";

export default function ProjectList() {
  const DUMMY_DATA = [
    {
      id: 1,
      title: "Natours",
      details: "A touring website built for people with a sense of adventure. The site showcases different tours that the customer can book as well as other customer reviews from people that have been on the different tours.",
      skills: ["Sass", "CSS", "HTML"],
      picture_url: "images/natours.JPG",
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
