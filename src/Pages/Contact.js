import "./Contact.css";
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import {MAP_BOX_API} from "../Utils/Config";

import {useEffect, useRef, useState} from "react";


function Contact() {
    mapboxgl.accessToken = MAP_BOX_API;
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
    return (
        <>
            <div className=" backgroundPage">
                <div className="mb-3 hide">div</div>
                <div className="d-flex justify-content-around">
                    <div className="col-6">
                        <div className="d-flex justify-content-center">
                            <h3 className='display-6 titleText'>
                                Contact Us
                            </h3>
                        </div>
                        <div className="container box-width rCorners2 card-shadow box2 mb-5">
                            <div className="card-body">
                                <div className="form-floating mb-3">
                                    <input type="firstName" className="form-control" id="firstName"
                                           placeholder="name@example.com"/>
                                    <label htmlFor="firstName">First Name</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="lastName" className="form-control" id="lastName"
                                           placeholder="Last Name"/>
                                    <label htmlFor="lastName">Last Name</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="email"
                                           placeholder="name@example.com"/>
                                    <label htmlFor="email">Email address</label>
                                </div>
                                <div className="form-floating mb-3">
                            <textarea className="form-control" placeholder="Leave a comment here"
                                      id="floatingTextarea" style={{height: '250px', resize: 'none'}}/>
                                    <label htmlFor="floatingTextarea">Comments</label>
                                </div>
                                <button className="button-36" role="button">Send Message</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">

                        <div className="container box-width rCorners2 card-shadow box2 mt-5">
                            <div>
                                <ul className="dot-none d-flex flex-column card-t-purp">
                                    <li className='mt-1'>R & R Home Caregivers, LLC</li>
                                    <li className='mt-1'>8103 North Hollow</li>
                                    <li className='mt-1'>San Antonio, TX 78240</li>
                                    <li className='mt-3'>Office Phone: <a
                                        href="tel:210-236-8955">(210) 236-8955</a></li>
                                    <li className='mt-1'>Fax: <a href="tel:888-978-5078">(888) 978-5078</a></li>
                                    <li className='mt-1'>Email: <a
                                        href="mailto:info@rrcaregivers.com">info@rrcaregivers.com</a></li>
                                </ul>
                            </div>
                            <div className="card-body">
                                {/*
                                <img src="http://via.placeholder.com/640x360" className='img-fluid' alt="temp"/>
*/}
                                <div ref={mapContainer} className="map-container"/>
                                <div className="mt-2">
                                    <button className="button-36" role="button">Get Directions</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
