import Image1 from "../img/rrImage1.jpg";
import Image2 from "../img/rrImage2.jpg";



function WhyRR(){

    return(<>
        <div className="backgroundAboutPage">
            <div className="row d-flex justify-content-center">
                <div className="col-6 mt-5">
                    <div className="container-fluid rCorners2 card-shadow box2 mb-5 row d-flex justify-content-center ">
                        <h1 className="text-center titleText underline">Why R & R Home Caregivers</h1>
                        <p className="text-center card-t-purp">R & R Home Caregivers is a woman owned home care agency providing personal assistance care to the elderly of San Antonio (Bexar County).  Our goal is to maintain the size of the company at a level where the owner will always be the client’s primary point of contact.</p>
                        <p className="text-center card-t-purp">R & R is licensed by the state of Texas, insured, and takes tremendous pride in hiring only loving and caring providers.  Our providers are generally, mature, experienced and well trained.</p>
                        <p className="text-center card-t-purp">We often meet the family of our clients at a time when their loved ones needs exceeds the family’s ability to provide the required care.  This is a difficult and stressful experience for the family.</p>
                        <p className="text-center card-t-purp">Our goal is to quickly and efficiently provide the care their loved one requires.  We will proactively work with the client and their family to provide the required care.  Additionally, we will assist in the management of the client’s other care providers.  This might include an independent living facility, an assisted living facility, memory care facility or in the comfort of their own home.  Our goal is to quickly reduce the stress on the family and provide the family confidence that their loved one is in good hands.</p>
                        <p className="text-center card-t-purp">Our motto is “where clients become family.”  We take this motto seriously.  We are being invited into the client’s home.  Our caregivers often spend more one on one time with the client than anyone else.  We care for the family’s loved one as if they were our own family.  We don’t know any other way.</p>
                        <p className="text-center card-t-purp underline">THE COMMITMENT WE MAKE TO YOU TODAY IS THE SAME
                            COMMITMENT WE WILL MAKE TOMORROW, NEXT MONTH, NEXT YEAR.</p>
                        {/*<a href="#" className="btn btn-primary">Button</a>*/}
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
            </div>
        </div>
    </>)
}

export default WhyRR;