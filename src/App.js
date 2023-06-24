import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import HowWeWork from "./pages/HowWeWork";
import Properties from "./pages/Properties";
import { PrologisProvider } from "./context/PrologisContext";

function App() {
  return (
    <PrologisProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route path="/howwework" element={<HowWeWork />}></Route>
        </Routes>
        <Routes>
          <Route path="/properties" element={<Properties />}></Route>
        </Routes>
      </Router>
    </PrologisProvider>
  );
}

export default App;
