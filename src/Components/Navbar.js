import Logo from "../img/LogoTransparent.png";
import "./Navbar.css"

const Navbar = () => {
    return (<>
        <nav className="shadow_box navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button
                    className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <a href="/"><img className="logo" src={Logo} alt="logo"/></a>
                    <ul className="navbar-nav mb-lg-0">
                        <li className="nav-item">
                            <a href="/" className="nav-link">Home</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a href="/whyRR" className="nav-link">Why R&R</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Testimonials</a>
                        </li>
                        <li className="nav-item">
                            <a href="/about" className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="/contact" className="nav-link">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>);
}
export default Navbar;
