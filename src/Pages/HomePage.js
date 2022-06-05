import "./HomePage.css"

import Mission from "../img/rrmission.jpg"
import Goal from "../img/rrImage3.jpg"
import Hero from "../Components/Hero";
import {goal, mission, whyUs, personal, homeManagement, homeAssessment, carePlan, QA} from "./Data";
import Cards from "../Components/Cards";

function HomePage() {
    const couraselImg = {
        height: '40vh',
        width: '40vh',
        borderRadius: '5%'
    }

    const timelineSize = {
        width: "500px"
    };

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

        <div className="container py-5">
            <div className="row py-3">
                <div className="col-8">
                    <div className="container text-center">
                        <h1 className="display-4 titleText mb-3">Welcome to R & R Home Caregivers</h1>
                        <h3 className="mb-5 titleText">"Where Clients Become Family"</h3>
                    </div>
                </div>
                <div className="col-4">
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={Mission} className="d-block w-100" alt="..." style={couraselImg}/>
                            </div>
                            <div className="carousel-item">
                                <img src={Goal} className="d-block w-100" alt="..." style={couraselImg}/>
                            </div>
                            <div className="carousel-item">
                                <img src={Mission} className="d-block w-100" alt="..." style={couraselImg}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="backgroundPage">


            {/*----------------------------------------------First 3 Cards----------------------------------------------*/}
{/*            <div className="d-flex justify-content-around">
                <div onLoad={slideFunction} className="container-fluid rCorners2 card-shadow card-w box2 row mb-5 d-flex justify-content-center animateUp hide">
                    <h1 className="text-center titleText">Our Mission</h1>
                    <img src={Mission} className="image"/>
                    <p className="text-center card-t-purp">Our mission is to provide compassionate and skillful home
                        care
                        services of superior quality to elderly and disabled persons in their performance of
                        activities of daily living in their own homes.</p>
                    <a href="#" className="btn btn-primary">Button</a>
                </div>


                <div className="d-flex justify-content-center container-fluid rCorners2 card-shadow card-w box2 row mb-5 animateUp hide">
                    <h1 className="text-center titleText">Our Goal</h1>
                    <img src={Goal} className="image"/>
                    <p className="text-center card-t-purp">Our Goal is to provide superior home care services allowing
                        our
                        clients to maintain their dignity and quality of life, increase their ability to lead an
                        independent life, and integrate them into the community as much as possible.</p>
                    <a href="#" className="btn btn-primary">Button</a>
                </div>


                <div className="container-fluid rCorners2 card-shadow card-w box2 row mb-5 d-flex justify-content-center animateUp hide">
                    <img src={Mission} className="image col-4"/>
                    <h1 className="text-center titleText">Payment Methods</h1>
                    <span className="material-icons icon-size text-center">&#xf041;</span>
                    <p className="text-center card-t-purp">R & R Home Caregivers accepts several forms of payments. We
                        accepts
                        Long-Term Care Insurance, VA Aid & Attendance, Private Insurance, private payment and
                        Medicaid.</p>
                    <a href="#" className="btn btn-primary">Button</a>
                </div>
            </div>*/}
            {/*passing in information from data.js into hero component*/}
            <Hero {...mission}/>
            <Hero {...goal}/>

            {/*why us part --------------------------------*/}
            <div className="container py-5">
                <div className="row">
                    <h4 className='text-center mb-4'>{whyUs.title}</h4>
                    <div className="col">
                        <p>{whyUs.leftCol}</p>
                    </div>
                    <div className="col">
                        <p>{whyUs.rightCol}</p>
                    </div>
                </div>
            </div>
            {/*============================================*/}

            {/*----------------------------------------------Our Services Card----------------------------------------------*/}
{/*
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
                        Testimonials
                    </h1>
                    <div className=" container box-width rCorners2 card-shadow box2 mb-5 ">
                        <ul className="card-t-purp dot-none">
                            <li>Check out the what people have to say about R & R Home Caregivers!
                            </li>
                        </ul>
                        <div className="d-flex justify-content-center">
                            <button className="button-36" role="button">Apply Today!</button>
                        </div>
                    </div>
                </div>
            </div>
*/}
            <div className='hero_bg py-5 mt-3'>
                <div className="container text-dark">
                    <div className="row">
                        <div className="card">
                            <h3 className="card-title mt-3">
                                Services
                            </h3>
                            <div className="card-body d-flex justify-content-between align-content-center">
                                <Cards {...personal}/>
                                <Cards {...homeAssessment}/>
                                <Cards {...homeManagement}/>
                                <Cards {...QA}/>
                                <Cards {...carePlan}/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            {/*----------------------------------------------Review Carousel----------------------------------------------*/}
            <h1 className="text-center titleText mt-5 mb-5 ">
                R & R's Facebook Timeline
            </h1>
            <div className="container d-flex justify-content-center">

            <div className="fb-page" data-href="https://www.facebook.com/rrcaregivers/" data-tabs="timeline"
                 data-width="2000" data-height="" data-small-header="false" data-adapt-container-width="false"
                 data-hide-cover="false" data-show-facepile="true">
                <blockquote cite="https://www.facebook.com/rrcaregivers/" className="fb-xfbml-parse-ignore"><a
                    href="https://www.facebook.com/rrcaregivers/">R &amp; R Home Caregivers</a></blockquote>
            </div>
            </div>
        </div>

    </>)

}

export default HomePage;
