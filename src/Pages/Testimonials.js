import {useState} from "react";
import Axios from 'axios'


function Testimonials(){

    const [titleName, setTitleName] = useState('')
    const [review, setReview] = useState('')
    const [imageURL, setImageURL] = useState('')

    const submitReview = () =>{
        Axios.post('http://localhost:3001/api/insert', {titleName:titleName, review:review, imageURL:imageURL})
            .then(()=>{
                alert("success");
        })
    };

    return(<>

        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
            <input type="text" name="titleName" onChange={(e) =>{
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
                <button onClick={submitReview} className="button-36" role="button">Submit</button>
            </div>
        </div>

    </>);

}

export default Testimonials;