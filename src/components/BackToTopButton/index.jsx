import styles from "./index.module.scss";

import { useState, useEffect } from "react";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 250);
  }, []);

  const scrollToTop = () => {
    const wrapper = document.querySelector(".wrapper");
    wrapper.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`${styles.btn} ${isVisible && styles.btn___visible}`}
    >
      <div className={styles.btn_icon}>
        <i className="fa-solid fa-arrow-up"></i>
      </div>
    </button>
  );
}
