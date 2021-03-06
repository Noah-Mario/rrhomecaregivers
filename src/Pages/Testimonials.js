import React, {useState, useEffect} from "react";
import axios from 'axios';
import Popup from "../Components/Popup";





function Testimonials() {

    const[buttonPopup, setButtonPopup] = useState(false)
    const [title, setTitle] = useState ("")
    const [review, setReview] = useState("")
    const [url, setUrl] = useState("")
    const [url2, setUrl2] = useState("")
    const [url3, setUrl3] = useState("")
    const [url4, setUrl4] = useState("")
    const [url5, setUrl5] = useState("")
    const [url6, setUrl6] = useState("")
    const [listOfPosts, setListOfPosts] = useState([]);
    const [listOfImages, setListOfImages] = useState([]);

    let endpoints = [
        "http://localhost:3306/posts",
        "http://localhost:3306/images"
    ];

    // if(last === false){
    //     axios.post("http://localhost:3306/images", {url: url, postId: 1}).then((res) => {
    //         console.log(res)
    //     })
    // }else{
    //     axios.post("http://localhost:3306/images", {url: url, postId: lastId }).then((res) => {
    //         console.log(res)
    //     })
    // }

    const onSubmit = () => {

        let i = 0;

        while ( i < endpoints.length) {
            let last = listOfPosts.at(-1)
            let lastId = last.id + 1
            if (endpoints[i] === "http://localhost:3306/images") {
                axios.post("http://localhost:3306/images", {url: url, url2: url2, url3: url3, url4: url4, url5: url5, url6: url6, postId: lastId }).then((res) => {
                    console.log(res)
                })
                // if(last === false){
                //     axios.post("http://localhost:3306/images", {url: url, postId: 1}).then((res) => {
                //         console.log(res)
                //     })
                // }else{
                //     axios.post("http://localhost:3306/images", {url: url, postId: lastId }).then((res) => {
                //         console.log(res)
                //     })
                // }
            }else {
                axios.post("http://localhost:3306/posts", {title: title, review: review}).then((res) => {
                    console.log(res)
                })
            }
            i++
        }
    }


    useEffect(() => {
        axios.get("http://localhost:3306/posts").then((res) =>
            setListOfPosts(res.data))
    }, [])

    // useEffect(() => {
    //     axios.get("http://localhost:3306/images").then((res) =>
    //         setListOfImages(res.data))
    // }, [])

const post = (postId) => {
        setButtonPopup(true)
        axios.get(`http://localhost:3306/images/${postId}`).then((res) =>
            // console.log(res.data))
            setListOfImages(res.data))

    }

    let deletePoints = [1,2];

    const deleteReview = (id) => {
        let i = 0;
        while ( i < deletePoints.length) {
            if(deletePoints[i] === 2){
                axios.delete(`http://localhost:3306/posts/${id}`).then((res) =>
                    console.log("sent")
                )
            }else{
                axios.delete(`http://localhost:3306/images/${id}`).then((res) =>
                    console.log("sent")
                )
            }i++
        }

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

        <div className="row d-flex justify-content-around">
            {listOfPosts.map((value, key) => {
                return<>
                   <div className=" rCorners2 card-shadow card-w box2 row  mb-5 ">
                    <h1 className="text-center titleText">{value.title}</h1>
                    <p className="text-center card-t-purp">{value.review}</p>
                       <p className="hide">{value.id}</p>
                       <button onClick={() => {post(value.id)}} on className="btn-blue createPost" role="button" type="submit">See Images</button>
                    <button onClick={() => {deleteReview(value.id)}} className="btn-red createPost hide" role="button" type="submit">Delete</button>
                </div>
                </>

            })}


        </div>

        <div className="createPost hide">
                <form onSubmit={onSubmit}>
                    <div className="mb-2">
                        <input className="form" id="inoutCreatePost"  name="title" placeholder="Author" onChange={(e => setTitle(e.target.value) )} />
                    </div>
                    <div className="mb-2">
                        <textarea id="inoutCreatePost" className="review" as="textarea" name="review" placeholder="Review" onChange={(e => setReview(e.target.value))} />
                    </div>
                    <div className="mb-2">
                        <input id="inoutCreatePost"  name="imageUrl" placeholder="ImageUrl" onChange={(e => setUrl(e.target.value))}/>
                    </div>
                    <div className="mb-2">
                        <input id="inoutCreatePost"  name="imageUrl" placeholder="ImageUrl" onChange={(e => setUrl2(e.target.value))}/>
                    </div>
                    <div className="mb-2">
                        <input id="inoutCreatePost"  name="imageUrl" placeholder="ImageUrl" onChange={(e => setUrl3(e.target.value))}/>
                    </div>
                    <div className="mb-2">
                        <input id="inoutCreatePost"  name="imageUrl" placeholder="ImageUrl" onChange={(e => setUrl4(e.target.value))}/>
                    </div>
                    <div className="mb-2">
                        <input id="inoutCreatePost"  name="imageUrl" placeholder="ImageUrl" onChange={(e => setUrl5(e.target.value))}/>
                    </div>
                    <div className="mb-2">
                        <input id="inoutCreatePost"  name="imageUrl" placeholder="ImageUrl" onChange={(e => setUrl6(e.target.value))}/>
                    </div>
                    <button className="button-36" role="button" type="submit">Submit</button>
                </form>
        </div>
        <button onClick={getUser} className="btn-red" role="button" type="submit">Write Post</button>

        <Popup trigger={buttonPopup}>
               {listOfImages.map((val, key) => {
                   console.log("image ", val)
                   console.log("list ", listOfPosts[key].id)
                   return <>
                       <img alt="uploaded" src={val.url} className="image col-4"/>
                   </>


               })}
            <button onClick={() => setButtonPopup(false)} className="close-btn">close</button>
        </Popup>

    </>);

}

export default Testimonials;
