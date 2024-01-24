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
        "A touring website built for people with a sense of adventure.",
      skills: ["Sass", "CSS", "HTML"],
      picture_url: "images/natours.png",
      git_link: "https://github.com/Electrolytful/Natours",
      live_link: "https://natours-erhandev.vercel.app"
    },
    {
      id: 2,
      title: "Nexter",
      details:
        "A website for a fictional company Nexter, selling luxury homes all across the globe.",
      skills: ["Sass", "CSS", "HTML"],
      picture_url: "images/nexter.png",
      git_link: "https://github.com/Electrolytful/Nexter",
      live_link: "https://nexter-erhandev.vercel.app"
    },
    {
      id: 3,
      title: "Trillo",
      details:
        "Trillo is an all-in-one booking platform helping the user to book hotels, flights and tours as well as rent cars during their visit.",
      skills: ["Sass", "CSS", "HTML"],
      picture_url: "images/trillo.png",
      git_link: "https://github.com/Electrolytful/Trillo",
      live_link: "https://trillo-erhandev.vercel.app"
    },
    {
      id: 4,
      title: "Calc.io",
      details:
        "A calculator able to perform basic calculations and save them into a history of calculations for the user to view.",
      skills: ["React", "Sass", "CSS", "HTML"],
      picture_url: "images/calc_io.png",
      git_link: "https://github.com/Electrolytful/Calc.io",
      live_link: "https://calcio-erhandev.vercel.app"
    },
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
