import {useState} from "react";
import axios from 'axios';



function Testimonials(){

    const [titleName, setTitleName] = useState('');
    const [review, setReview] = useState('');
    const [imageURL, setImageURL] = useState('');

let handleSubmit = (e) => {
    axios.post("http://localhost:3306/create", {titleName: titleName, review: review, imageURL: imageURL})
        .then(() => {
            console.log("success")
        })
}
    // let handleSubmit = (e) => {
    //     setImageURL(e.target.value);
    //     setReview(e.target.value);
    //     setTitleName(e.target.value);
    //     e.preventDefault();
    //
    //     const post = {
    //         titleName,
    //         review,
    //         imageURL,
    //     };
    //     console.log(post)
    //     fetch('http://localhost:3306/create', {
    //         mode:"cors",
    //         method: 'POST',
    //         headers: { "Content-Type": 'application/x-www-form-urlencoded;charset=UTF-8'},
    //         body: JSON.stringify(post)
    //     })
    //         .then((res) => res.json()).then((data) => console.log(data))
    //         .catch(err => {
    //             console.log(err);
    //         });
    // }

    return(<>
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
            <input type="text" name="imageURL" onChange={(e) =>{
                setImageURL(e.target.value)
            }} className="form-control" id="exampleFormControlInput1" />
            <div className="mt-2">
                <button onClick={handleSubmit} className="button-36" role="button" type="submit">Submit</button>
            </div>
        </div>
    </>);

}

export default Testimonials;
