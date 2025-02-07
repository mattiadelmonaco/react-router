import { BrowserRouter, Routes, Route } from "react-router-dom";

// layouts
import DefaultLayout from "./layouts/DefaultLayout";
// pages
import HomePage from "./pages/HomePage";
import PostList from "./pages/PostsList";
import AboutUs from "./pages/AboutUs";
import Contacts from "./pages/Contacts";
import PageNotFound from "./pages/PageNotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/posts-list" element={<PostList />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
