import { useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Footer from "./component/Footer";
import Contact from "./component/Contact";
import PrivacyPolicy from "./component/PrivacyPolicy";
import Termofuse from "./component/Termofuse";
import Page404 from "./component/Page404";

function App() {
  return (
    <>
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
