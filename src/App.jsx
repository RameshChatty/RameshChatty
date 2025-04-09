import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Pages/Layout";
import Headder from "./Pages/Headder";
import { Footer } from "./Pages/Footer";
import About from "./Pages/components/About";
import Service from "./Pages/components/Service";
import Portfolio from "./Pages/components/Portfolio";
import Resume from "./Pages/components/Resume";
import Contacts from "./Pages/components/Contacts";

function App() {
  return (
    <>
      <div className="font-mono bg-linear-to-r from-red-200 to-BLUE-200">
        <Headder />
        <div className="min-h-150">
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/About" element={<About />} />
            <Route path="/Skills" element={<Service />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/Resume" element={<Resume />} />
            <Route path="/contact" element={<Contacts />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
