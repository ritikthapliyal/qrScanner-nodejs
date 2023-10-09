import { useState,useRef } from "react"
import { useNavigate } from "react-router-dom"
import { useLoginMutation } from "../store/apis/authApis"
import { useDispatch } from "react-redux"
import { setAuthState } from "../store/authSlice"


export default function Login(){

    const dispatch = useDispatch()
    const navigate=useNavigate()
    const[username,setUsername]=useState("")
    const[password,setPassword]=useState("")
    const passwordInputRef = useRef(null)
    const usernameInputRef = useRef(null)
    
    const [ userLogin, userLoginOptions] = useLoginMutation()

    const saveUsername = (e)=>{
        userLoginOptions.isError = false
        usernameInputRef.current.style.outlineColor = '#5555ff'
        const inputVal = e.target.value.trim()
        if(inputVal.length === 0){
            setUsername("")
        }else{
            setUsername(inputVal)
        }
    }
    const savePassword = (e)=>{
        userLoginOptions.isError = false
        passwordInputRef.current.style.outlineColor = '#5555ff'
        const inputVal = e.target.value.trim()
        if(inputVal.length === 0){
            setPassword("")
        }else{
            setPassword(inputVal)
        }
    }

    const handleLogin = async(e)=>{
        e.preventDefault()

        if (password.length === 0 || username.length === 0) {

            if(password.length === 0){
                passwordInputRef.current.focus()
                passwordInputRef.current.style.outlineColor = 'red'
            }
            if(username.length === 0){
                usernameInputRef.current.focus()
                usernameInputRef.current.style.outlineColor = 'red'
            }
            
        }
        else{
            try{
                const response = await userLogin({username,password})
                if(response.data && response.data.status === 200){
                    localStorage.setItem('token', response.data.token)
                    dispatch(setAuthState({isLoggedIn : true}))
                    navigate("/")
                }
            }
            catch(error){
                console.log(error)
            }   
        }
    }

    return(
        <div className="loginform-container">
            <form className="loginform" onSubmit={handleLogin}>
                <h2>Login</h2>
                {
                    userLoginOptions.isError && <pre className="error-pre">
                        {userLoginOptions.error.error ? "Something Went Wrong" : userLoginOptions.error.data.error }
                    </pre>
                }
                {
                    userLoginOptions.isLoading && <pre>Loading...</pre>
                }
                <div className="login-input-div">
                    <label>Username :</label>
                    <input
                        type="text"
                        ref={usernameInputRef}
                        value={username} 
                        placeholder="Enter Username" 
                        onChange={saveUsername}>
                    </input>
                </div>
                <div className="login-input-div">
                    <label>Password :</label>
                    <input
                        type="password"
                        ref={passwordInputRef}
                        value={password}
                        onChange={savePassword} 
                        placeholder="Enter Password">
                    </input>
                </div>
                <button onClick={handleLogin}>Login</button>
            </form>
        </div>
    )
}









