import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow font-poppins">
        {/* This is where the child components will be rendered */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
