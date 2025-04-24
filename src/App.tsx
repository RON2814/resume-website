import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Challenges from "./pages/Challenges";
import FuturePlans from "./pages/FuturePlans";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/future-plans" element={<FuturePlans />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
