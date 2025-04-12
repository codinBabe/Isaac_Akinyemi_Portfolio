import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/About";
import Resume from "./pages/Resume";
import MainLayout from "./layouts/MainLayout";
import WorksLayout from "./layouts/WorkLayout";
import Casestudy from "./pages/works/Casestudy";
import Website from "./pages/works/Website";
import Explorations from "./pages/works/Exploration";
import ComradeProject from "./pages/works/dedicated/ComradeProject";
import HymnsApp from "./pages/works/dedicated/HymnsApp";
import EcobankProject from "./pages/works/dedicated/EcobankProject";
import TickEvent from "./pages/works/dedicated/TickEvent";
import ToyinPortfolio from "./pages/works/dedicated/ToyinPortfolio";
import DesoRealtor from "./pages/works/dedicated/DesoRealtor";
import BuildingBand from "./pages/works/dedicated/BuildingBand";
import SharedLayout from "./layouts/SharedLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Navigate to="/works" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />

          <Route path="/works/*" element={<WorksLayout />}>
            <Route index element={<Navigate to="casestudy" replace />} />
            <Route path="casestudy" element={<Casestudy />} />
            <Route path="website" element={<Website />} />
            <Route path="exploration" element={<Explorations />} />
          </Route>
        </Route>

        <Route element={<MainLayout />}>
          <Route path="/comrade-project" element={<ComradeProject />} />
          <Route path="/hymns-project" element={<HymnsApp />} />
          <Route path="/ecobank-projects" element={<EcobankProject />} />
          <Route path="/tickvent-project" element={<TickEvent />} />
          <Route path="/toyin's-portfolio" element={<ToyinPortfolio />} />
          <Route path="/deso-realtor" element={<DesoRealtor />} />
          <Route path="/building-band" element={<BuildingBand />} />
        </Route>

        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
