
import './App.css';
import HomePage from "./Pages/HomePage";
import "bootstrap"
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


function App() {
  return (
    <>
        <Navbar/>
        <HomePage/>
        <Footer/>
    </>
  );
}

export default App;
