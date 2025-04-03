import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy } from "react";

const About = lazy(() => import("./pages/About"));
const Resume = lazy(() => import("./pages/Resume"));
const ComradeProject = lazy(() =>
  import("./pages/works/dedicated/ComradeProject")
);
const HymnsApp = lazy(() => import("./pages/works/dedicated/HymnsApp"));
const EcobankProject = lazy(() =>
  import("./pages/works/dedicated/EcobankProject")
);
const TickEvent = lazy(() => import("./pages/works/dedicated/TickEvent"));
const ToyinPortfolio = lazy(() =>
  import("./pages/works/dedicated/ToyinPortfolio")
);
const DesoRealtor = lazy(() => import("./pages/works/dedicated/DesoRealtor"));
const BuildingBand = lazy(() => import("./pages/works/dedicated/BuildingBand"));
const MainLayout = lazy(() => import("./layouts/MainLayout"));
const WorksLayout = lazy(() => import("./layouts/WorkLayout"));
const Casestudy = lazy(() => import("./pages/works/Casestudy"));
const Website = lazy(() => import("./pages/works/Website"));
const Explorations = lazy(() => import("./pages/works/Exploration"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/works" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/comrade-project" element={<ComradeProject />} />
          <Route path="/hymns-project" element={<HymnsApp />} />
          <Route path="/ecobank-projects" element={<EcobankProject />} />
          <Route path="/tickvent-project" element={<TickEvent />} />
          <Route path="/toyin's-portfolio" element={<ToyinPortfolio />} />
          <Route path="/deso-realtor" element={<DesoRealtor />} />
          <Route path="/building-band" element={<BuildingBand />} />
        </Route>

        <Route path="/works/*" element={<WorksLayout />}>
          <Route index element={<Navigate to="casestudy" replace />} />
          <Route path="casestudy" element={<Casestudy />} />
          <Route path="website" element={<Website />} />
          <Route path="exploration" element={<Explorations />} />
        </Route>

        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
