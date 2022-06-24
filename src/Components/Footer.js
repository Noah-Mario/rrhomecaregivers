import Logo from "../img/LogoTransparent.png";
import axios from "axios"
import mapboxgl from "mapbox-gl";
import {useEffect, useRef, useState} from "react";
import 'mapbox-gl/dist/mapbox-gl.css';

const Footer = () => {

    const {REACT_APP_MAPBOX_API_KEY} = process.env;
    mapboxgl.accessToken = REACT_APP_MAPBOX_API_KEY;
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-98.602100);
    const [lat, setLat] = useState(29.515450);
    const [zoom, setZoom] = useState(13);

    const marker = new mapboxgl.Marker({
        color: "#ff1500",
        draggable: false,
    }).setLngLat([lng, -lat]);


    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom,
        });
    });


    const logout = () => {
    axios.get("http://localhost:3306/users/logout", {withCredentials: true, credentials: 'include'}).then((res) => {
        console.log("logged out")
        }
    )}

    return(
        <>
            <div className="footerColor row d-flex justify-content-center">
                <div className="col-2 mt-5 text-center">
                    <a href="/"><img className="footerImage" src={Logo} alt="logo"/></a>
                    {/*<div className="text-center mt-4 d-flex justify-content-around">*/}
                    {/*<a href="/login" className="aText">Login</a>*/}
                    {/*<a onClick={logout} className="aText">Logout</a>*/}
                    {/*</div>*/}
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
                        <div className="text-center mt-2">
                            <a href="/login" className="aText">Login</a>
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
                    <div className="mb-2">
                        <a onClick={logout} className="aText">Logout</a>
                    </div>
                </div>
                <div className=" col-6">
                    <div className="map">
                        <div ref={mapContainer} className="map-container map"/>
                    </div>
                </div>


                </div>
        </>
    );
}
export default Footer;
