import {useState} from "react";
// import Axios from 'axios'



function Testimonials(){

    const [titleName, setTitleName] = useState('');
    const [review, setReview] = useState('');
    const [imageURL, setImageURL] = useState('');

    // Example POST method implementation:
    async function postData(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                // 'Content-Type': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }

    const submitReview = () =>{
        console.log("here")

        postData('http://localhost:3001/api/insert', {titleName:titleName, review:review, imageURL:imageURL})
            .then(response => {
                if (!response.ok){
                    throw new Error('Network response not okay')
                }
            })
            .then(data => {
                console.log(data); // JSON data parsed by `data.json()` call
            }).catch(error => {
            console.error('there is a problem with your fetch operation: ', error)
        })


    }

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