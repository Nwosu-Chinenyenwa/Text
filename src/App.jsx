import { useEffect, useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./component/Footer";
import Contact from "./component/Contact";
import Layout from "./Layout.jsx"
import PrivacyPolicy from "./component/PrivacyPolicy";
import Termofuse from "./component/Termofuse";
import Page404 from "./component/Page404";
import { useLocation, useNavigate } from "react-router-dom";

function SaveLastPage() {
  const location = useLocation();
  useEffect(() => {
    const setLastPage = localStorage.setItem("setLastPage", location.pathname);
  }, [location]);
    return null;
}

function RestorLastPage() {
  const navigate = useNavigate();
  useEffect(() => {
    const RestorPage = localStorage.getItem("setLastPage");
    if(RestorPage && RestorPage !== window.location.pathname){
    navigate(RestorPage);
    }
  }, [navigate]);
  return null;
}

function App() {
  return (
    <>
      <SaveLastPage />
      <RestorLastPage />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termofuse" element={<Termofuse />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
