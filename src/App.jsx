import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Pages/Layout";
import Headder from "./Pages/Headder";
import { Footer } from "./Pages/Footer";
import About from "./Pages/components/About";
import Service from "./Pages/components/Service";
import Portfolio from "./Pages/components/Portfolio";
import Resume from "./Pages/components/Resume";

function App() {
  return (
    <>
      <div className="font-mono bg-linear-to-r from-yellow-100 to-BLUE-200">
        <Headder />
        <div className="min-h-150">
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/About" element={<About />} />
            <Route path="/Skills" element={<Service />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/Resume" element={<Resume />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
