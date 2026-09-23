import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home";
import UploadVideo from "./pages/UploadVideo";
import UploadTelemetry from "./pages/UploadTelemetry";
import Configuration from "./pages/Configuration";
import Dashboard from "./pages/Dashboard";
import Results from "./pages/Results";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload-video" element={<UploadVideo />} />
        <Route path="/upload-telemetry" element={<UploadTelemetry />} />
        <Route path="/configuration" element={<Configuration />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;