import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { getListOfFiles } from "./components/s3utils";
import PhotoSidebar from "./components/sidebar";
import ImageListTable from "./components/imageListTabls";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

// import PhotoMosaic from "./components/photoMosaic";
import MosaicTest from "./components/mosaicTest";
import PhotoMosaic from "./components/photoMosaic";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import PaginationPhotos from "./components/paginationPhotos";
// import './index.css'
function App() {
  useEffect(() => {
    getListOfFiles();
  }, []);
  return (
    <>
      <CssBaseline />

      <div
        style={{
          height: "100vh",
          maxHeight: "100vh",
          overflowY: "hidden",
          width: "100vw",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <PhotoSidebar />
          <div style={{ flexGrow: "1" }}>
            <Routes>
              <Route path="/table" element={<ImageListTable />} />
              <Route path="/photos/:pageNum" element={<PaginationPhotos />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
