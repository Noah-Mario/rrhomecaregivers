import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
const Contact = () => {
    return(
        <>
            <Navbar/>
            <div className="container my-5">
                <div className="row flex-direction-column">
                    <div className="col">
                        Contact R & R Home Caregivers
                    </div>
                    <div className="col ">
                        R & R Home Caregivers, LLC
                        8103 North Hollow
                        San Antonio, TX  78240
                        Office Phone: (210) 236-8955
                        Fax:  (888) 978-5078
                        ​email:  info@rrcaregivers.com
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
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
                        <div className="card">
                            <div className="card-body">
                                map will go here
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
