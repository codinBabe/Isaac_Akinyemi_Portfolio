import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";
import About from "./pages/About";
import Works from "./pages/Works";
import Resume from "./pages/Resume";
import MainLayout from "./layouts/MainLayout";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate to={"/works"} replace />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<div>404</div>} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
