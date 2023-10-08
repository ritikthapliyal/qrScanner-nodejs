import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setAuthState } from '../store/authSlice'

function SessionExpired({setShowSessionExpired}) {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClick = ()=>{
        setShowSessionExpired(false)
        localStorage.removeItem('token')
        dispatch(setAuthState({isLoggedIn : false}))
        navigate('/')
    }

    return (
        <div className='session-expired'>
            <p>Session Expired. Please Login Again</p>
            <button onClick={handleClick}>Login</button>
        </div> 
    )
}

export default SessionExpired