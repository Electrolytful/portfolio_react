import {
  Hero,
  About,
  Projects,
} from "./pages";

import { ProjectContextProvider } from "./context/projectContext";

export default function App() {
  return (
    <ProjectContextProvider>
      <div className="wrapper">
        <Hero />
        <About />
        <Projects />
      </div>
    </ProjectContextProvider>
  );
}
