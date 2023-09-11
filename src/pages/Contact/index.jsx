import styles from "./index.module.scss";
import { ContactBox } from "../../components";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
  });

  return (
    <section className={styles.contact}>
      <div
        ref={contentRef}
        className={`${styles.contact_content} ${
          contentInView ? styles.contact_content___visible : ""
        }`}
      >
        <div className={styles.contact_title}>
          <h2>
            <span>C</span>ontact
          </h2>
          <p>Get in contact with me from any of the options below 👇</p>
        </div>

        <div className={styles.contact_boxes}>
          <ContactBox contact={"LinkedIn"} />
          <ContactBox contact={"Email"} />
        </div>
      </div>
    </section>
  );
}
