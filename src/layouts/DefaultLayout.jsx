import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DefaultLayout() {
  const location = useLocation();
  return (
    <>
      <Header />
      <main
        className={
          location.pathname.startsWith("/posts-list") ? "bg-posts-list" : ""
        }
      >
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
