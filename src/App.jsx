import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { getListOfFiles } from "./components/s3utils";
import PhotoSidebar from "./components/sidebar";
import ImageListTable from "./components/imageListTabls";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import PhotoMosaic from "./components/photoMosaic";
function App() {
  useEffect(() => {
    getListOfFiles();
  }, []);
  return (
    <>
      <div style={{ display: "flex", height: "100vh" }}>
        <PhotoSidebar />
        <Routes>
          <Route path="/table" element={<ImageListTable />} />
          <Route path="/photo" element={<PhotoMosaic />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
