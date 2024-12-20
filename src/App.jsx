import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/About";
import Resume from "./pages/Resume";
import MainLayout from "./layouts/MainLayout";
import WorksLayout from "./layouts/WorkLayout";
import CaseStudy from "./pages/works/Casestudy";
import Website from "./pages/works/Website";
import Explorations from "./pages/works/Exploration";
import ComradeProject from "./pages/works/dedicated/ComradeProject";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/works" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/comrade-project" element={<ComradeProject />} />
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Route>
        <Route path="/works/*" element={<WorksLayout />}>
          <Route index element={<Navigate to="casestudy" replace />} />
          <Route path="casestudy" element={<CaseStudy />} />
          <Route path="website" element={<Website />} />
          <Route path="exploration" element={<Explorations />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
