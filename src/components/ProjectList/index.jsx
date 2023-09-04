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
      git_link: "https://github.com/Electrolytful/natours-advanced-css",
    },
    {
      id: 2,
      title: "NotesAI",
      details: "NotesAI allows students to login to their account where they can create and save a note. With ChatGPT integration, users can also highlight a part of text in their note, generating a response from ChatGPT explaining the highlighted word or sentence.",
      skills: ["React", "CSS", "HTML"],
      picture_url: "images/notes_ai.png",
      git_link: "https://github.com/Vitali-G/NotesAI---Client",
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
              git_link={project.git_link}
            />
          </li>
        );
      })}
    </ul>
  );
}
