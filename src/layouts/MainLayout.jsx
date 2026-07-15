import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import ScrollRestoration from "../components/common/ScrollRestoration";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollRestoration />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
