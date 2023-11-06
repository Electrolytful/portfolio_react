import { useState, useContext, createContext } from "react";

const ProjectContext = createContext({
  projects: [],
});

export function ProjectContextProvider({ children }) {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Natours",
      details:
        "A touring website built for people with a sense of adventure. The site showcases different tours that the customer can book as well as other customer reviews from people that have been on the different tours.",
      skills: ["Sass", "CSS", "HTML"],
      picture_url: "images/natours.png",
      git_link: "https://github.com/Electrolytful/Natours",
      live_link: "https://natours-erhandev.vercel.app"
    },
    {
      id: 2,
      title: "NotesAI",
      details:
        "NotesAI allows students to login to their account where they can create and save a note. With ChatGPT integration, users can also highlight a part of text in their note, generating a response from ChatGPT explaining the highlighted word or sentence.",
      skills: ["React", "CSS", "HTML"],
      picture_url: "images/notes_ai.png",
      git_link: "https://github.com/Vitali-G/NotesAI---Client",
    },
    {
      id: 3,
      title: "Trillo",
      details:
        "Trillo is an all-in-one booking platform allowing the user to book hotels, flights and tours as well as rent cars during their visit. Undertaken as part of a Advanced CSS course to practice flexbox.",
      skills: ["Sass", "CSS", "HTML"],
      picture_url: "images/trillo.png",
      git_link: "https://github.com/Electrolytful/Trillo",
      live_link: "https://trillo-erhandev.vercel.app"
    }
  ]);

  const context = {
    projects: projects,
    projectsAmount: projects.length,
  };

  return (
    <ProjectContext.Provider value={context}>
      {children}
    </ProjectContext.Provider>
  );
}

export const useProject = () => useContext(ProjectContext);
