import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import "./Login.css"

export default function Login(){

    const navigate=useNavigate()
    const[username,setUsername]=useState("tanya")
    const[password,setPassword]=useState("bisht")

    const handleLogin = async(e)=>{
        e.preventDefault()
        try{
            const response=await axios.post("https://efce1xom36.execute-api.ap-south-1.amazonaws.com/dev/login",{username,password}, {withCredentials:true})
            console.log(response.data.token)
            navigate('/Dashboard')
        }
        catch(err){
            console.log(err)
        }   
    }

    return(
        <div className="loginform-container">
            <form className="loginform" onSubmit={handleLogin}>
                <label>Login</label>
                <input
                    type="text"
                    value={username} 
                    placeholder="Enter Username" 
                    onChange={(e)=>{setUsername(e.target.value)}}>
                </input>
                <input
                    type="password"
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}} 
                    placeholder="Enter Password">
                </input>
                <button onClick={handleLogin}>Login</button>
            </form>
        </div>
    )
}









