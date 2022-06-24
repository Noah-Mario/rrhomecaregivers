import {useState, useEffect} from "react";
import axios from 'axios';
import {Formik, Form, Field, ErrorMessage} from 'formik';




function Testimonials() {


    const initialValues ={
        title: "",
        review: "",
        imageUrl: "",
        imageUrl2: "",
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

    const getUser = (e) => {
        axios.get("http://localhost:3306/users", {withCredentials: true, credentials: 'include'}).then((res) => {
            const valid = res.data
            if(valid === "valid"){
                const post = document.querySelectorAll('.createPost')
                post.forEach(x => x.classList.toggle('hide'));
            }else{
                console.log("fail")
            }

        })
    }



    return (<>
        <h1 className="text-center underline titleText">
            Testimonials
        </h1>

        <div className="w-100 newCard row d-flex justify-content-around">
            {listOfPosts.map((value, key) => {
                return <div
                    className="container-fluid rCorners2 card-shadow card-w box2 row mb-5 d-flex justify-content-center">
                    <h1 className="text-center titleText">{value.title}</h1>
                    <p className="text-center card-t-purp">{value.review}</p>
                    <img src={value.imageUrl} className="image col-4"/>
                    <p className="hide">{value.id}</p>
                    <button onClick={() => {deleteReview(value.id)}} className="btn-red createPost hide" role="button" type="submit">Delete</button>
                </div>
            })}
        </div>

        <div className="createPost hide">
            <Formik initialValues={initialValues} onSubmit={onSubmit} >
                <Form>
                    <div className="mb-2">
                        <Field className="form" id="inoutCreatePost"  name="title" placeholder="Author" />
                    </div>
                    <div className="mb-2">
                        <Field id="inoutCreatePost" className="review" as="textarea" name="review" placeholder="Review" />
                    </div>
                    <div className="mb-2">
                        <label>ImageUrl: </label>
                        <Field id="inoutCreatePost"  name="imageUrl" placeholder="ImageUrl" />
                    </div>
                    <div className="mb-2">
                        <label>ImageUrl2: </label>
                        <Field id="inoutCreatePost"  name="imageUrl2" placeholder="ImageUrl2" />
                    </div>
                    <button className="button-36" role="button" type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
        <button onClick={getUser} className="btn-red" role="button" type="submit">Write Post</button>

    </>);

}

export default Testimonials;
