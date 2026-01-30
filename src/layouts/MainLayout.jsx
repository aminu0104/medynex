import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer will go here */}
    </div>
  );
};

export default MainLayout;