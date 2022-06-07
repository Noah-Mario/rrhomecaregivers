import {useState} from "react";
import Axios from 'axios'
import {error} from "mapbox-gl/src/style-spec/util/result";


function Testimonials(){

    const [titleName, setTitleName] = useState('');
    const [review, setReview] = useState('');
    const [imageURL, setImageURL] = useState('');

    const submitReview = () =>{
        console.log("here")
        Axios.post('localhost:3306/api/insert', {titleName:titleName, review:review, imageURL:imageURL})
            .then((data)=>{
                console.log("now here")
                console.log(data);
        }).catch((error)=>{
            console.log(error)
        });
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
                <button onClick={submitReview} className="button-36" role="button" type="submit">Submit</button>
            </div>
        </div>

    </>);

}

export default Testimonials;