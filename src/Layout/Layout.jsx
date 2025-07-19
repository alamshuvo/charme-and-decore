// Layout.jsx
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import TopBanner from "../components/TopBanner";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Navbar with background */}
      <div className="bg-gradient-to-r from-[#8d7acb] to-[#a894e9]">
      <TopBanner />
        <Nav />
      </div>

      {/* Page content */}
      <main className="flex-grow space-y-20">
        <Outlet />
      </main>

      {/* Footer stays fixed */}
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
}
