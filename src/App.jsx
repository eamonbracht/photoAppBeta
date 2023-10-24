import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { getListOfFiles } from "./components/s3utils";
import PhotoSidebar from "./components/sidebar";
import ImageListTable from "./components/imageListTabls";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
// import PhotoMosaic from "./components/photoMosaic";
import MosaicTest from "./components/mosaicTest";
function App() {
  useEffect(() => {
    getListOfFiles();
  }, []);
  return (
    <>
      <div style={{ display: "flex", height: "100vh" }}>
        <PhotoSidebar />
        <div style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/table" element={<ImageListTable />} />
            <Route path="/photos" element={<MosaicTest />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/contact" element={<ContactMe />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
