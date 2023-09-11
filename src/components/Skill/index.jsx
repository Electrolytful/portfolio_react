import styles from "./index.module.scss";
import { useState, useEffect } from "react";

export default function Skill({ skill }) {
  const [isReact, setIsReact] = useState(false);
  const [isJs, setIsJs] = useState(false);
  const [isHtml, setIsHtml] = useState(false);
  const [isCss, setIsCss] = useState(false);
  const [isSass, setIsSass] = useState(false);

  const setSkill = (skill) => {
    const skill_lowerCase = skill.toLowerCase();

    switch (skill_lowerCase) {
      case "react":
        setIsReact(true);
        break;

      case "javascript":
        setIsJs(true);
        break;

      case "html":
        setIsHtml(true);
        break;

      case "css":
        setIsCss(true);
        break;

      case "sass":
        setIsSass(true);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    setSkill(skill);
  }, []);

  return (
    <div className={styles.skill}>
      <p>{skill}</p>
      <i
        className={`${isReact ? `fa-brands fa-react` : ``} ${
          isJs ? `fa-brands fa-square-js` : ``
        } ${isHtml ? `fa-brands fa-html5` : ``} ${
          isCss ? `fa-brands fa-css3-alt` : ``
        } ${isSass ? `fa-brands fa-sass` : ``}`}
      ></i>
    </div>
  );
}
