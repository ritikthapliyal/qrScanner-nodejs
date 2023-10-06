import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import "./Login.css"

export default function Login(){

    const navigate=useNavigate()
    const[username,setUsername]=useState("tanya")
    const[password,setPassword]=useState("bisht")

    const handleLogin = async()=>{

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
        <div className="barcode-scanner-login">
       <form  className="loginform" onSubmit={(e)=>{
        console.log(username,password)
        e.preventDefault()
       }}>
        <div className="login-page-header">Login Page</div>
        <input onChange={(e)=>{
            setUsername(e.target.value)
        }} placeholder="username" value={username}  ></input>
        <input onChange={(e)=>{
            setPassword(e.target.value)
        }} placeholder="password" value={password}></input>
        <button onClick={handleLogin}>Login</button>
       </form>
       </div>
    )
}









