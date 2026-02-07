import Navbar from "../components/layouts/Navbar";
import Footers from "../components/layouts/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <main className="bg-[#00030D]">
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footers />
    </main>
  );
};

export default MainLayout;
