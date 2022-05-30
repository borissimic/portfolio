import Header from "components/Header";
import { Routes, Route } from "react-router-dom";
import AboutPage from "views/AboutPage";
import ContactPage from "views/ContactPage";
import HomePage from "views/HomePage";
import ProjectsPage from "views/ProjectsPage";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </div>
  );
};

export default App;
