import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// main app styles
import "./styles/App.css";

// routes
import { ProjectPage } from "./pages/Project/ProjectPage";
import { ProjectContextProvider } from "./context/ProjectContext";

function App() {
  return (
    <ProjectContextProvider>
      <Router>
        <Routes>
          <Route path="/project/:projectId" element={<ProjectPage />}></Route>
        </Routes>
      </Router>
    </ProjectContextProvider>
  );
}

export default App;
