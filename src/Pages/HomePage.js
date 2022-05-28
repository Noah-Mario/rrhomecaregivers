import "./HomePage.css"
// import $ from "jquery"
import Placeholder from "../img/Placeholder.jpeg"

function HomePage(){
    return(<>
{/*-----------------------------------------------Jumbotron-------------------------------------------------*/}

        <div className="backgroundColor">
            <div className="container-fluid ">
                <div className="container text-center">
                    <h1 className="display-4 my-4">Welcome to R & R Home Caregivers</h1>
                    <h3 className="mb-5">"Where Clients Become Family"</h3>
                </div>
            </div>

{/*----------------------------------------------First 3 Cards----------------------------------------------*/}

<div className="row d-flex justify-content-center justify-content-around mb-5 ">
    <div className="col-3 card-container">
        <div className="mb-3 d-flex justify-content-center">
            {/*<img src={Mission} className="img card-img-top" alt="..."/>*/}
            <span className="material-icons icon-size">&#xeb9b;</span>
        </div>
            <div className="card card-h card-shadow">
                    <div className="card-body">
                        <h5 className="card-title">Our Mission</h5>
                        <p className="card-text">Our mission is to provide compassionate and skillful home care services of superior quality to elderly and disabled persons in their performance of activities of daily living in their own homes.</p>
                        {/*<a href="/" className="btn btn-primary">Go somewhere</a>*/}
                    </div>
            </div>
    </div>
    <div className="col-3 card-container">
        <div className="mb-3 d-flex justify-content-center">
            <span className="material-icons icon-size">&#xe50a;</span>
        </div>
            <div className="card card-h card-shadow">
                <div className="card-body">
                    <h5 className="card-title">Our Goal</h5>
                    <p className="card-text">Our Goal is to provide superior home care services allowing our clients to maintain their dignity and quality of life, increase their ability to lead an independent life, and integrate them into the community as much as possible.​</p>
                    {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
                </div>
            </div>
    </div>
    <div className="col-3 card-container">
        <div className="mb-3 d-flex justify-content-center">
            <span className="material-icons icon-size">&#xf041;</span>
        </div>
            <div className="card card-h card-shadow">
                <div className="card-body">
                    <h5 className="card-title">Payment Methods</h5>
                    <p className="card-text">R & R Home Caregivers accepts several forms of payments.  We accepts Long-Term Care Insurance, VA Aid & Attendance, Private Insurance, private payment and Medicaid.</p>
                    {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
                </div>
            </div>
    </div>
</div>

{/*----------------------------------------------Our Services Card----------------------------------------------*/}

<div className="row d-flex justify-content-center justify-content-around mb-5 ">
                <h3 className="text-center">
                    Our Services
                </h3>
                <div className="card-body row d-flex justify-content-around">
                    <div className="card col-2 card-shadow">
                    <h5 className="card-title">Assistance with Personal Care</h5>
                    <p className="card-text">Dressing, Transferring, Grooming, Bathing, etc. (Learn More)</p>
                        <button className="button-36" role="button">Button 36</button>
                    </div>
                    <div className="card col-2 card-shadow">
                        <h5 className="card-title">Home Management</h5>
                        <p className="card-text">Light Housekeeping, Meal Planning, Assistance with Self-Administered Medications, etc. (Learn More)</p>
                        <a href="#" className="btn btn-primary">Learn More</a>
                    </div>
                    <div className="card col-2 card-shadow">
                        <h5 className="card-title">Free Home Care Assessment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary">Learn More</a>
                    </div>
                    <div className="card col-2 card-shadow">
                        <h5 className="card-title">Individualized Plan of Care</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary">Learn More</a>
                    </div>
                    <div className="card col-2 card-shadow">
                        <h5 className="card-title">Quality Control Visits</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary">Learn More</a>
                    </div>
                </div>
</div>

{/*----------------------------------------------Review Carousel----------------------------------------------*/}

            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active d-flex justify-content-center">
                    <img src={Placeholder} className="img-fluid" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                </div>
                <div className="carousel-item d-flex justify-content-center">
                    <img src={Placeholder} className="img-fluid" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                </div>
                <div className="carousel-item d-flex justify-content-center">
                    <img src={Placeholder} className="img-fluid" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    </div>

    </>)
}
export default HomePage;
