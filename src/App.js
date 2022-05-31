import './App.css';
import "bootstrap"
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import WhyRR from "./Pages/WhyR&R";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import {
    BrowserRouter,
    Routes, // instead of "Switch"
    Route,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";



function App() {
  return (
    <>
        <Navbar/>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/whyRR" element={<WhyRR/>}/>
            </Routes>
        </BrowserRouter>
        <Footer/>
                  
    </>
  );
}

export default App;
