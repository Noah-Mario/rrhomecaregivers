import "./About.css"
import AboutImg from "../img/rrAboutImage.jpg";

function About() {


    return (<>

        <div className="row d-flex justify-content-center">
            <div className="col-6">
                <div className="container-fluid rCorners2 card-shadow box2 mb-5 row d-flex justify-content-center ">
                    <h1 className="text-center titleText underline">R & R's Owner</h1>
                    <p className="text-center card-t-purp">Hi, I am Rosanna Rocha the owner of R & R Home Caregivers.  I started R & R shortly after the passing of my mother, Ageuda Rocha.  Having 10 years experience in home healthcare and the experience of being with my mother as she lived through the aging process, I have developed a deep respect and compassion for our elderly.</p>
                    <p className="text-center card-t-purp">I am very aware of how stressful the aging process is on a family and how difficult it can be to get the best care you can for your elderly loved one.</p>
                    <p className="text-center card-t-purp">I want to share the compassion I have for the elderly with a limited number of families and help provide the care the family is seeking.  The aging process is a journey.  No journey is the same.  R & R is prepared to be with the family and their loved one as we experience the unique path each journey takes us.</p>
                    <p className="text-center card-t-purp">I look forward to the opportunity to work with you and your family. R & R Home Caregivers is "where clients become family."</p>
                    <p className="text-center card-t-purp underline">THE COMMITMENT WE MAKE TO YOU TODAY IS THE SAME COMMITMENT WE WILL MAKE TOMORROW, NEXT MONTH, NEXT YEAR.</p>
                    {/*<a href="#" className="btn btn-primary">Button</a>*/}
                </div>
            </div>
            <div className="col-3">
                <div className="container-fluid rCorners2 card-shadow box2 mb-5 d-flex justify-content-center">
                    <img src={AboutImg} className="aboutImg"/>
                </div>
            </div>
        </div>

    </>)
}

export default About;
