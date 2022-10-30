import "./App.css";
import React from "react";
import Nav from "./components/Nav";
import Forecast from "./pages/Forecast";
import { Routes, Route } from "react-router-dom";
import Astronomy from "./pages/Astronomy";
import Timezone from "./pages/Timezone";

export default function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" element={<Forecast />} />
        <Route path="/astronomy" element={<Astronomy />} />
        <Route path="/timezone" element={<Timezone />} />
      </Routes>
    </div>
  );
}
