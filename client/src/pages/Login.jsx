import {useRef, useContext} from "react";
import {loginCall} from "../apiCalls"
import { AuthContext } from "../context/AuthContext";



function Login(){

    const username= useRef();
    const password = useRef();
    const {user, isFetching, dispatch} = useContext(AuthContext);

    const handleClick = (e) =>{
        e.preventdefault();
        loginCall({username:username.current.value,password:password.current.value},dispatch);
    }

  

    return (
        <div>
            <form onSubmit={handleClick}>
                <div className="login-form">
                    <h1>Log in</h1>
                    <div className="username-div" >
                        <input placeholder="Username" required ref={username}/>
                    </div>
                    <div className="password-div">
                        <input placeholder="Password" required minLength="4" type="password" ref={password}/>
                    </div>
                    <button type="submit" value="LogIn" className="login-btn">{isFetching ? "loading" : "Log in"} </button>
                </div>
            </form>
        </div>
    )

}

export default Login