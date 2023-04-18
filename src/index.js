import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Events from "./pages/eventspage";
import LandingPage from "./pages/landingPage";
import Teams from "./pages/teamspage";


ReactDOM.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/teams" element={<Teams />} />
      </Routes>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
