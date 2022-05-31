import Image1 from "../img/rrImage1.jpg";
import Image2 from "../img/rrImage2.jpg";

function Services(){

    return(<>
        <div className="backgroundAboutPage">
            <div className="row d-flex justify-content-center">
                <div className="col-4 mt-5">
                    <div className="container-fluid rCorners2 card-shadow box2 mb-3 row d-flex justify-content-center ">
                        <h1 className="text-center titleText underline">Free Home Care Assessment</h1>
                        <p className="text-center card-t-purp">R & R Home Caregivers will complete a free home care assessment and, in consultation with the client, her family, and medical provider (as necessary) and develop a plan of care tailored to the needs of the client and her family members.</p>
                    </div>
                    <div className="container-fluid rCorners2 card-shadow box2 mb-3 row d-flex justify-content-center ">
                        <h1 className="text-center titleText underline">Quality Control Visits</h1>
                        <p className="text-center card-t-purp">R & R Management visits clients on a no-notice basis, but no less than annually (as required by the State of Texas), to ensure that R & R caregivers are carrying out their responsibilities in a manner that is consistent with each client's individualized plan of care.</p>
                    </div>
                    <div className="container-fluid rCorners2 card-shadow box2 mb-3 row d-flex justify-content-center ">
                        <h1 className="text-center titleText underline">Review of Individualized Plan of Care</h1>
                        <p className="text-center card-t-purp">Each year (or upon the request of the client), R & R reviews each client's Individualized Plan of Care to ensure that it is still relevant to the needs of the client and their family.</p>
                    </div>
                </div>
                <div className="col-3 mt-5">
                    <div className="container-fluid rCorners2 card-shadow box2 mb-3 d-flex justify-content-center">
                        <img src={Image1} className="aboutImg"/>
                    </div>
                    <div className="container-fluid rCorners2 card-shadow box2 mb-5 d-flex justify-content-center">
                        <img src={Image2} className="aboutImg"/>
                    </div>
                </div>
                <div className="col-4 mt-5 ms-3">
                    <div className="container-fluid rCorners2 card-shadow box2 mb-3 row d-flex justify-content-center ">
                        <h1 className="text-center titleText underline">Personal Care Services</h1>
                        <p className="text-center card-t-purp">We provide assistance with activities of daily living, such as:</p>
                        <ul className="card-t-purp ms-5">
                            <li>Personal Hygiene</li>
                            <li>Grooming</li>
                            <li>Oral Care</li>
                            <li>Dressing</li>
                            <li>Bathing</li>
                            <li>Making Appropriate Clothing Decisions</li>
                            <li>Eating</li>
                            <li>Feeding Self</li>
                            <li>Maintaining Continence</li>
                            <li>Ability to use the restroom</li>
                            <li>Transferring</li>
                            <li>Moving from seated to standing</li>
                            <li>Getting in and out of bed</li>
                            <li>Mobility (Walking and Climbing Stairs)</li>
                        </ul>
                    </div>
                    <div className="container-fluid rCorners2 card-shadow box2 mb-3 row d-flex justify-content-center ">
                        <h1 className="text-center titleText underline">Home Management</h1>
                        <p className="text-center card-t-purp">We provide assistance with activities of daily living, such as:</p>
                        <ul className="card-t-purp ms-5">
                            <li>Light Housework</li>
                            <li>Transportation</li>
                            <li>Shopping</li>
                            <li>Meal Planning / Preparation</li>
                            <li>Laundry</li>
                            <li>Assistance with Self-Administered</li>
                            <li>Maintaining a Hygienic Place of Residence</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </>)
}
export default Services;