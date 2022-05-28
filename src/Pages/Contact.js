import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./Contact.css";

const Contact = () => {

    return (
        <>
            <Navbar/>
            <div className="container-fluid py-5 bg_gradient vh-50">
                <div className="container">
                    <div className="row flex-direction-column">
                        <div className="col">
                            <h3 className='display-6'>
                                Contact R & R Home Caregivers
                            </h3>
                        </div>
                        <div className="col ">
                            <p className="d-flex flex-column">
                                <span className='mt-1'>R & R Home Caregivers, LLC</span>
                                <span className='mt-1'>8103 North Hollow</span>
                                <span className='mt-1'>San Antonio, TX  78240</span>
                                <span className='mt-3'>Office Phone: <a href="tel:210-236-8955">(210) 236-8955</a></span>
                                <span className='mt-1'>Fax:  <a href="tel:888-978-5078">(888) 978-5078</a></span>
                                <span className='mt-1'>Email:  <a href="mailto:info@rrcaregivers.com">info@rrcaregivers.com</a></span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container z_index">
                <div className="row">
                    <div className="col">
                        <div className="card shadow_box border_none">
                            <div className="card-body">
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="floatingInput"
                                           placeholder="name@example.com"/>
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" id="floatingPassword"
                                           placeholder="Password"/>
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="floatingInput"
                                           placeholder="name@example.com"/>
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating mb-3">
                            <textarea className="form-control" placeholder="Leave a comment here"
                                      id="floatingTextarea" style={{height: '250px', resize: 'none'}}>Message</textarea>
                                    <label htmlFor="floatingTextarea">Comments</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow_box border_none">
                            <div className="card-body">
                                <img src="http://via.placeholder.com/640x360" className='img-fluid' alt="temp"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    );
}
export default Contact;
