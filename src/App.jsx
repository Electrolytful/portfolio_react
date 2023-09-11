import { Hero, About, Projects, Contact, Footer } from "./pages";
import { BackToTopButton } from "./components";

import { useState, useEffect } from "react";

export default function App() {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    const wrapper = document.querySelector(".wrapper");
    wrapper.addEventListener("scroll", () => {
      if (wrapper.scrollTop > window.innerHeight) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  return (
    <>
      {backToTop && <BackToTopButton />}
      <div className="wrapper">
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
