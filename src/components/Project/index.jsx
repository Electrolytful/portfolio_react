import styles from "./index.module.scss";
import Skill from "../Skill";

export default function Project({ title, details, skills, picture_url }) {
  return (
    <div className={styles.project}>
      <div className={`${styles.project_side} ${styles.project_side___front}`}>
        <div className={styles.project_picture}>
          <img src={`${picture_url}`} alt="Project Image" />
        </div>
          <h4 className={styles.project_title}>{title}</h4>
          <div className={styles.project_details}>
            <p>{details}</p>
          </div>
      </div>
      <div className={`${styles.project_side} ${styles.project_side___back}`}>
        <div className={styles.project_skills}>
          <ul>
            {skills.map((skill, i) => {
              return (
                <li key={i}>
                  <Skill skill={skill} />
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.project_buttons}>
          <p>Button 1</p>
          <p>Button 2</p>
        </div>
      </div>
    </div>
  );
}
