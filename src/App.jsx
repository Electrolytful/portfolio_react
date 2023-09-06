import {
  Hero,
  About,
  Projects,
  Contact,
} from "./pages";

import { ProjectContextProvider } from "./context/projectContext";

export default function App() {
  return (
    <ProjectContextProvider>
      <div className="wrapper">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </ProjectContextProvider>
  );
}
