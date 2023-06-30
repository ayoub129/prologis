import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Development from "./pages/Development";
import Properties from "./pages/Properties";
import Construction from "./pages/Construction";
import Cleaning from "./pages/Cleaning";
import Contact from "./pages/Contact";
import { PrologisProvider } from "./context/PrologisContext";
import Career from "./pages/Career";
import Investor from "./pages/Investor";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <PrologisProvider>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route path="/Development" element={<Development />}></Route>
        </Routes>
        <Routes>
          <Route path="/properties" element={<Properties />}></Route>
        </Routes>
        <Routes>
          <Route path="/Construction" element={<Construction />}></Route>
        </Routes>
        <Routes>
          <Route path="/Cleaning" element={<Cleaning />}></Route>
        </Routes>
        <Routes>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Routes>
          <Route path="/Careers" element={<Career />}></Route>
        </Routes>
        <Routes>
          <Route path="/Investor" element={<Investor />}></Route>
        </Routes>
      </Router>
    </PrologisProvider>
  );
}

export default App;
