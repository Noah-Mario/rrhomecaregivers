import {useState, useEffect} from "react";
import axios from 'axios';
import {Formik, Form, Field, ErrorMessage} from 'formik';
// import Mission from "../img/rrmission.jpg"


function Testimonials() {

    // const [title, setTitle] = useState('');
    // const [review, setReview] = useState('');
    // const [imageUrl, setImageUrl] = useState('');
    // console.log(title)
    // const [titleName, setTitleName] = useState('');
    // const [review, setReview] = useState('');
    // const [imageURL, setImageURL] = useState('');
    // const [id, setId] = useState('');
    // const [posts, setPosts] = useState([]);
    const initialValues ={
        title: "",
        review: "",
        imageUrl: "",
    }

    const [listOfPosts, setListOfPosts] = useState([]);

    const onSubmit = (data) => {
        // const inputs = {
        //     title: title,
        //     review : review,
        //     imageUrl : imageUrl
        // }
        axios.post("http://localhost:3306/posts", data).then((e) => {
                setListOfPosts(e.data)
            }
        )}


    useEffect(() => {
        axios.get("http://localhost:3306/posts").then((res) =>
            setListOfPosts(res.data))

    }, [])




    // useEffect(() => {
    //     axios.get("http://localhost:3306/get").then((res) =>
    //         setPosts(res.data))
    //
    // }, [])

    // const deleteReview = (id) => {
    //     axios.delete(`http://localhost:3306/delete/${id}`).then((res) =>
    //         console.log("sent"))
    //     window.location.reload()
    // }
    //
    //
    // let handleSubmit = (e) => {
    //     axios.post("http://localhost:3306/create", {
    //         titleName: titleName, review: review, imageURL: imageURL
    //     }).then((e) => {
    //         console.log("HERE")
    //     });
    //
    //     setPosts([...posts,
    //         {titleName: titleName, review: review, imageURL: imageURL}
    //     ]);
    //     window.location.reload()
    //
    // }

    return (<>
        {/*<div className="d-flex justify-content-center">*/}
        {/*    <div className="mb-3">*/}
        {/*        <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>*/}
        {/*        <input type="text" name="title" onChange={(e) => {*/}
        {/*            setTitle(e.target.value)*/}
        {/*        }} className="form-control" id="exampleFormControlInput1"/>*/}
        {/*    </div>*/}
        {/*    <div className="mb-3">*/}
        {/*        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>*/}
        {/*        <textarea className="form-control" name="review" onChange={(e) => {*/}
        {/*            setReview(e.target.value)*/}
        {/*        }} id="exampleFormControlTextarea1" rows="3"/>*/}
        {/*    </div>*/}
        {/*    <div className="mb-3">*/}
        {/*        <label htmlFor="exampleFormControlInput1" className="form-label">Image</label>*/}
        {/*        <input type="text" name="imageUrl" onChange={(e) => {*/}
        {/*            setImageUrl(e.target.value)*/}
        {/*        }} className="form-control" id="exampleFormControlInput1"/>*/}
        {/*        <div className="mt-2">*/}
        {/*            <button onClick={onSubmit} className="button-36" role="button" type="submit">Submit</button>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</div>*/}

        <div className="createPost">
            <Formik initialValues={initialValues} onSubmit={onSubmit} >
                <Form>
                    <label>Title: </label>
                    <Field id="inoutCreatePost"  name="title" placeholder="Author" />
                    <label>Review: </label>
                    <Field id="inoutCreatePost"  name="review" placeholder="Review" />
                    <label>ImageUrl: </label>
                    <Field id="inoutCreatePost"  name="imageUrl" placeholder="ImageUrl" />
                    <button className="button-36" role="button" type="submit">Submit</button>
                </Form>
            </Formik>
        </div>

        <div className="w-100 newCard row d-flex justify-content-around">
            {listOfPosts.map((value, key) => {
                return <div
                    className="container-fluid rCorners2 card-shadow card-w box2 row mb-5 d-flex justify-content-center">
                    <img src={value.imageUrl} className="image col-4"/>
                    <h1 className="text-center titleText">{value.title}</h1>
                    <p className="text-center card-t-purp">{value.review}</p>
                    <p className="hide">{value.id}</p>
                    <button className="btn-blue" role="button" type="submit">Update</button>

                    {/*<button onClick={() => {deleteReview(value.id)}} className="btn-red" role="button" type="submit">Delete</button>*/}
                </div>
            })}
        </div>

    </>);

}

export default Testimonials;
