import {useState, useEffect} from "react";
import axios from 'axios';





function Testimonials() {

    const [title, setTitle] = useState ("")
    const [review, setReview] = useState("")
    const [url, setUrl] = useState("")
    const [listOfPosts, setListOfPosts] = useState([]);
    const [listOfImages, setListOfImages] = useState([]);
    //
    // let last = listOfPosts.at(-1)
    // console.log(last)
    // console.log(last.id)

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
                axios.post("http://localhost:3306/images", {url: url, postId: 3 }).then((res) => {
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

    useEffect(() => {
        axios.get("http://localhost:3306/images").then((res) =>
            setListOfImages(res.data))
    }, [])
// const post = (postId) => {
//         axios.get(`http://localhost:3306/images/${postId}`).then((res) =>
//
//             setListOfImages(res.data))
//     }


    const deleteReview = (id) => {
        axios.delete(`http://localhost:3306/posts/${id}`).then((res) =>
            console.log("sent")
        )
        // window.location.reload()
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
                    {/*<p onLoad={(e) => {post(value.id)}} className="hide">{value.id}</p>*/}
                    <button onClick={() => {deleteReview(value.id)}} className="btn-red createPost hide" role="button" type="submit">Delete</button>
                </div>
                </>

            })}
            {listOfImages.map((val, key) => {
                console.log("image ", val)
                console.log("list ", listOfPosts[key].id)
                return <>
                    <img alt="uploaded" src={val.url} className="image col-4"/>
                </>


            })}

        </div>

        <div className="createPost hide">
                <form onSubmit={onSubmit}>
                    <div className="mb-2">
                        <input className="form" id="inoutCreatePost"  name="title" placeholder="Author" onChange={(e => setTitle(e.target.value) )} />
                    </div>
                    <div className="mb-2">
                        <input id="inoutCreatePost" className="review" as="textarea" name="review" placeholder="Review" onChange={(e => setReview(e.target.value))} />
                    </div>
                    <div className="mb-2">
                        <input id="inoutCreatePost"  name="imageUrl" placeholder="ImageUrl" onChange={(e => setUrl(e.target.value))}/>
                    </div>
                    <button className="button-36" role="button" type="submit">Submit</button>
                </form>
        </div>
        <button onClick={getUser} className="btn-red" role="button" type="submit">Write Post</button>

    </>);

}

export default Testimonials;
