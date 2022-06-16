import Logo from "../img/LogoTransparent.png";

const Footer = () => {
    return(
        <>
            <div className="footerColor row d-flex justify-content-center">
                <div className="col-2 mt-5">
                    <a href="/"><img className="footerImage ms-5" src={Logo} alt="logo"/></a>
                    <a href="/login" className="aText">Login</a>
                </div>
                    <div className="col-2 mt-5">
                        <div className="text-center">
                            <a href="/contact" className="aText">Contact</a>
                        </div>
                    <div className=""><span className="material-icons icon-size-sm text-center">&#xe0b0;</span>
                        <a className="aText" href="tel:210-236-8955">Call: (210) 236-8955</a>
                    </div>

                    <div className=""><span className="material-icons icon-size-sm text-center">&#xead8;</span>
                        <a className="aText" href="tel:888-978-5038">Fax: (888) 978-5038</a>
                    </div>

                    <div className=""><span className="material-icons icon-size-sm text-center">&#xe158;</span>
                        <a className="aText" href="mailto:info@rrcaregivers.com">info@rrcaregivers.com</a>
                    </div>
                    </div>
                <div className="text-center col-2 mt-5">
                    <div className="mb-2">
                        <a href="/services" className="aText">Services</a>
                    </div>
                    <div className="mb-2">
                        <a href="/about" className="aText">About</a>
                    </div>
                    <div className="mb-2">
                        <a href="/whyRR" className="aText">Why R & R</a>
                    </div>
                    <div className="mb-2">
                        <a href="/" className="aText">Testimonials</a>
                    </div>
                </div>
                <div className=" col-6">
                    <img src="http://via.placeholder.com/640x360" className='footerMapImage mt-2 mb-2' alt="temp"/>
                    {/*<div className="d-flex justify-content-center">*/}
                    {/*<button className="button-36 mt-1" role="button" >Get Directions</button>*/}
                    {/*</div>*/}
                </div>


                </div>
        </>
    );
}
export default Footer;
