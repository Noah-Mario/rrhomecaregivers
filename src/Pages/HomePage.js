import "./HomePage.css"
// import $ from "jquery"
import Placeholder from "../img/Placeholder.jpeg"
import Mission from "../img/rrmission.jpg"
import Goal from "../img/rrImage3.jpg"

function HomePage() {

    // fetch(`https://graph.facebook.com/USER-ID/accounts?fields=name,access_token&access_token=${process.env.REACT_APP_WEATHER_API_KEY}`).then(response => response.json())
    //     .then(data => console.log(data))

    function slideFunction() {
        let slide = document.querySelectorAll(".animateUp");
        for (let i = 0; i < slide.length; i++) {
            setTimeout(() => {
                slide[i].classList.remove("hide");
                slide[i].classList.add("animate__fadeInUp");
            }, 100)
        }
    }

    function revealCards() {
        let slideScroll = document.querySelectorAll(".scrollUp");
        for (let i = 0; i < slideScroll.length; i++) {
            let windowHeight = window.innerHeight;
            let elementTop = slideScroll[i].getBoundingClientRect().top;
            let elementVisible = 50;
            if (elementTop < windowHeight - elementVisible) {
                slideScroll[i].classList.add("animate__fadeInUp");
                slideScroll[i].classList.remove("hide");
            }
        }
    }

    window.addEventListener("scroll", revealCards);
    return (<>
        {/*-----------------------------------------------Jumbotron-------------------------------------------------*/}

        <div className="backgroundPage">
            <div className="mb-3 hide">div</div>
            <div className="container text-center">
                <h1 className="display-4 titleText">Welcome to R & R Home Caregivers</h1>
                <h3 className="mb-5 titleText">"Where Clients Become Family"</h3>
            </div>

            {/*----------------------------------------------First 3 Cards----------------------------------------------*/}
            <div className="d-flex justify-content-around">
                <div onLoad={slideFunction} className="container-fluid rCorners2 card-shadow card-w box2 row mb-5 d-flex justify-content-center animateUp hide">
                    <h1 className="text-center titleText">Our Mission</h1>
                    <img src={Mission} className="image"/>
                    <p className="text-center card-t-purp">Our mission is to provide compassionate and skillful home
                        care
                        services of superior quality to elderly and disabled persons in their performance of
                        activities of daily living in their own homes.</p>
                    {/*<a href="#" className="btn btn-primary">Button</a>*/}
                </div>


                <div className="d-flex justify-content-center container-fluid rCorners2 card-shadow card-w box2 row mb-5 animateUp hide">
                    <h1 className="text-center titleText">Our Goal</h1>
                    <img src={Goal} className="image"/>
                    <p className="text-center card-t-purp">Our Goal is to provide superior home care services allowing
                        our
                        clients to maintain their dignity and quality of life, increase their ability to lead an
                        independent life, and integrate them into the community as much as possible.</p>
                    {/*<a href="#" className="btn btn-primary">Button</a>*/}
                </div>


                <div className="container-fluid rCorners2 card-shadow card-w box2 row mb-5 d-flex justify-content-center animateUp hide">
                    {/*<img src={Mission} className="image col-4"/>*/}
                    <h1 className="text-center titleText">Payment Methods</h1>
                    <span className="material-icons icon-size text-center">&#xf041;</span>
                    <p className="text-center card-t-purp">R & R Home Caregivers accepts several forms of payments. We
                        accepts
                        Long-Term Care Insurance, VA Aid & Attendance, Private Insurance, private payment and
                        Medicaid.</p>
                    {/*<a href="#" className="btn btn-primary">Button</a>*/}
                </div>
            </div>

            {/*----------------------------------------------Our Services Card----------------------------------------------*/}
            <div className="d-flex justify-content-around scrollUp hide">
                <div>
                    <h1 className="text-center titleText mt-5 mb-5 ">
                        Our Services
                    </h1>
                    <div className=" container box-width rCorners2 card-shadow box2 mb-5 ">
                        <ul className="card-t-purp">
                            <li>Assistance with Personal: Care Dressing, Transferring, Grooming, Bathing, etc.</li>
                            <li>Home Management: Light Housekeeping, Meal Planning, Assistance with Self-Administered
                                Medications, etc.
                            </li>
                            <li>Free Home Care Assessment</li>
                            <li>Individualized Plan of Care</li>
                            <li>Quality Control Visits</li>
                        </ul>
                        <div className="d-flex justify-content-center">
                            <button className="button-36" role="button">Learn More!</button>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-center titleText mt-5 mb-5 ">
                        Apply at R & R
                    </h1>
                    <div className=" container box-width rCorners2 card-shadow box2 mb-5 ">
                        <ul className="card-t-purp dot-none">
                            <li>R & R Home Caregivers is a growing company providing unskilled care for elderly clients
                                in San Antonio and surrounding areas. R & R is dedicated to providing the highest level
                                of care to our senior population. As the company grows we are in constant need of
                                caregivers for multiple shifts. We provide care in the client's home, in independent
                                living communities and memory care facilities.
                            </li>
                        </ul>
                        {/*<h5 className="card-t-purp">Position Requirements</h5>*/}
                        {/*<ul className="card-t-purp">*/}
                        {/*    <li>A commitment to providing the absolute best care to our clients</li>*/}
                        {/*    <li>2 years of caregiving expierence or currently enrolled in CNA or similar training program</li>*/}
                        {/*</ul>*/}
                        <div className="d-flex justify-content-center">
                            <button className="button-36" role="button">Apply Today!</button>
                        </div>
                    </div>
                </div>
            </div>
            {/*----------------------------------------------Review Carousel----------------------------------------------*/}
            <div className="fb-page" data-href="https://www.facebook.com/rrcaregivers/" data-tabs="timeline"
                 data-width="" data-height="" data-small-header="false" data-adapt-container-width="true"
                 data-hide-cover="false" data-show-facepile="true">
                <blockquote cite="https://www.facebook.com/rrcaregivers/" className="fb-xfbml-parse-ignore"><a
                    href="https://www.facebook.com/rrcaregivers/">R &amp; R Home Caregivers</a></blockquote>
            </div>
            {/*<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">*/}
            {/*    <div className="carousel-indicators">*/}
            {/*        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"*/}
            {/*                className="active"*/}
            {/*                aria-current="true" aria-label="Slide 1"></button>*/}
            {/*        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"*/}
            {/*                aria-label="Slide 2"></button>*/}
            {/*        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"*/}
            {/*                aria-label="Slide 3"></button>*/}
            {/*    </div>*/}
            {/*    <div className="carousel-inner">*/}
            {/*        <div className="carousel-item active d-flex justify-content-center">*/}
            {/*            <img src={Placeholder} className="img-fluid" alt="..."/>*/}
            {/*            <div className="carousel-caption d-none d-md-block">*/}
            {/*                <h5>First slide label</h5>*/}
            {/*                <p>Some representative placeholder content for the first slide.</p>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="carousel-item d-flex justify-content-center">*/}
            {/*            <img src={Placeholder} className="img-fluid" alt="..."/>*/}
            {/*            <div className="carousel-caption d-none d-md-block">*/}
            {/*                <h5>Second slide label</h5>*/}
            {/*                <p>Some representative placeholder content for the second slide.</p>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="carousel-item d-flex justify-content-center">*/}
            {/*            <img src={Placeholder} className="img-fluid" alt="..."/>*/}
            {/*            <div className="carousel-caption d-none d-md-block">*/}
            {/*                <h5>Third slide label</h5>*/}
            {/*                <p>Some representative placeholder content for the third slide.</p>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"*/}
            {/*            data-bs-slide="prev">*/}
            {/*        <span className="carousel-control-prev-icon" aria-hidden="true"></span>*/}
            {/*        <span className="visually-hidden">Previous</span>*/}
            {/*    </button>*/}
            {/*    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"*/}
            {/*            data-bs-slide="next">*/}
            {/*        <span className="carousel-control-next-icon" aria-hidden="true"></span>*/}
            {/*        <span className="visually-hidden">Next</span>*/}
            {/*    </button>*/}
            {/*</div>*/}

        </div>

    </>)

}

export default HomePage;
