import React, {useState, useEffect} from "react";
import axios from "axios"

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState("")

// const register = (e) => {
//     axios.post("http://localhost:3306/register", {username: username, password: password})
//         .then((res) => {
//             console.log(res)
//         })
// }
    axios.defaults.withCredentials = true;
    const Login = (e) => {
        axios.post("http://localhost:3306/login", {username: username, password: password})
            .then((res) => {
                console.log("logged in")
            })
    }

    useEffect(() => {
        axios.get('http://localhost:3306/login').then((res) => {
            console.log("got it")
            if(res.data.loggedIn === true) {
                setLoginStatus(res.data.user[0].username)
            }
        })
    }, [])

    return (<>
        <div className="col text-center">
            <div className="">
                <h1>Login</h1>
            </div>
            <div>
                <h3>Username</h3>
            </div>
            <div>
                <input onChange={((e) => setUsername(e.target.value))} className="username" type="text"/>
            </div>
            <h3>Password</h3>
            <div>
                <input onChange={((e) => setPassword(e.target.value))} className="password" type="password"/>
            </div>
            <button onClick={Login} className="button-36 my-4" role="button" type="submit">Login</button>
        </div>

        {/*<div className="col text-center">*/}
        {/*    <div className="">*/}
        {/*        <h1>Register</h1>*/}
        {/*    </div>*/}
        {/*    <div>*/}
        {/*        <h3>Username</h3>*/}
        {/*    </div>*/}
        {/*    <div>*/}
        {/*        <input onChange={((e) => setUsername(e.target.value))} className="username" type="text"/>*/}
        {/*    </div>*/}
        {/*    <h3>Password</h3>*/}
        {/*    <div>*/}
        {/*        <input onChange={((e) => setPassword(e.target.value))} className="password" type="password"/>*/}
        {/*    </div>*/}
        {/*    <button  onClick={register} className="button-36 my-4" role="button" type="submit">register</button>*/}
        {/*</div>*/}


    </>)
}

export default Login;