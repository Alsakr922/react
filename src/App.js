
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import SectionThree from "./components/SectionThree";
import Projects from "./components/Projects";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import Submit from "./components/Submit";
import Footer from "./components/Footer";
import "./App.css"
function App() {
  return (
  <Router>
    <Navbar />
    <Home />
    <Skills />
    <Routes>
      <Route path="/" element={<Projects />}>
          <Route path="one" element={<SectionOne />} />
          <Route path="three" element={<SectionThree />} />
        </Route>
    </Routes>
    <SectionTwo/>
    <Submit />
    <Footer />
  </Router>
  );
}

export default App;
