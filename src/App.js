import './App.css';
import "bootstrap"
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import WhyRR from "./Pages/WhyR&R";
import Services from "./Pages/Services";
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
            <div className='main_bg_color'>
                <Navbar/>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/whyRR" element={<WhyRR/>}/>
                        <Route path="/services" element={<Services/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
            <Footer/>
        </>
    );
}

export default App;
