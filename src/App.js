import './App.css';
import "bootstrap"
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import WhyRR from "./Pages/WhyR&R";
import Services from "./Pages/Services";
import Testimonials from "./Pages/Testimonials";
import Login from "./Pages/Login";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import axios from "axios";

import {
    BrowserRouter,
    Routes, // instead of "Switch"
    Route,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";



function App() {
    //
    // function checkLoginStatus(){
    //     axios.get("http://localhost:3306/Users", {withCredentials: true}).then((res) => {
    //         console.log("logged in? ", res)
    //     }).catch((error) => {
    //         console.log("error ", error)
    //     })
    // }
    //
    // function componentDidMount(){
    //     checkLoginStatus()
    // }

  return (
    <>
        <Navbar/>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/whyRR" element={<WhyRR/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/testimonials" element={<Testimonials/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
        <Footer/>
                  
    </>
  );
}

export default App;
