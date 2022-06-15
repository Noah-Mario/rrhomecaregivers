import {useState, useEffect} from "react";
import axios from 'axios';
// import Mission from "../img/rrmission.jpg"


function Testimonials(){

    const [titleName, setTitleName] = useState('');
    const [review, setReview] = useState('');
    const [imageURL, setImageURL] = useState('');

    useEffect(() => {
        axios.get("http://localhost:3306/get").then((res) =>
            console.log(res.data))
    }, [])

    // function renderCard(){
    //     let element = document.getElementsByClassName('newCard')
    //     let card = `<div className="container-fluid rCorners2 card-shadow card-w box2 row mb-5 d-flex justify-content-center">
    //         <img src={imageURL} className="image col-4"/>
    //         <h1 className="text-center titleText">{titleName}</h1>
    //         <p className="text-center card-t-purp">{review}</p>
    //     </div>`
    //     element.append(card)
    // }

let handleSubmit = (e) => {
    axios.post("http://localhost:3306/create", {titleName: titleName, review: review, imageURL: imageURL})
        .then(() => {
            console.log("success")
        })

}

    return(<>
        <div className="d-flex justify-content-center">
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                <input type="text" name="titleName" onChange={(e) => {
                    setTitleName(e.target.value)
                }} className="form-control" id="exampleFormControlInput1"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" name="review" onChange={(e) => {
                    setReview(e.target.value)
                }} id="exampleFormControlTextarea1" rows="3"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Image</label>
                <input type="text" name="imageURL" onChange={(e) => {
                    setImageURL(e.target.value)
                }} className="form-control" id="exampleFormControlInput1"/>
                <div className="mt-2">
                    <button onClick={handleSubmit} className="button-36" role="button" type="submit">Submit</button>
                </div>
            </div>
        </div>

<div className="w-100 newCard">

</div>

    </>);

}

export default Testimonials;
