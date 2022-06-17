import {useState, useEffect} from "react";
import axios from 'axios';
import {Formik, Form, Field, ErrorMessage} from 'formik';



function Testimonials() {

    const initialValues ={
        title: "",
        review: "",
        imageUrl: "",
    }

    const [listOfPosts, setListOfPosts] = useState([]);

    const onSubmit = (data) => {
        axios.post("http://localhost:3306/posts", data).then((e) =>
            setListOfPosts(e.data)
        )
        window.location.reload();
    }

    useEffect(() => {
        axios.get("http://localhost:3306/posts").then((res) =>
            setListOfPosts(res.data))
    }, [])


    const deleteReview = (id) => {
        axios.delete(`http://localhost:3306/posts/${id}`).then((res) =>
            console.log("sent")
        )
        window.location.reload()
    }

    return (<>

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
                    <button onClick={() => {deleteReview(value.id)}} className="btn-red" role="button" type="submit">Delete</button>
                </div>
            })}
        </div>

    </>);

}

export default Testimonials;
