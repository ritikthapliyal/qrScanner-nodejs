import { useEffect } from 'react'
import { useVerifyAuthMutation } from '../store/apis/authApis'
import { useDispatch } from "react-redux"
import { setAuthState } from "../store/authSlice"

const useAuthVerification = () => {

  const dispatch = useDispatch()
  const [ verifyAuth, {isLoading} ] = useVerifyAuthMutation()

  const callVerifyAuth = async(token)=>{
    try {
        const response = await verifyAuth(token)
        
        if (response.error) {
            dispatch(setAuthState({isLoggedIn : false}))
            throw new Error(response.error.data.error)
        }
        else{
            console.log(response)
            dispatch(setAuthState({isLoggedIn : true}))
        }

      } catch (error) {
        console.error(error)
      }

  }

  useEffect(() => {
    
    const token = localStorage.getItem('token')
    
    if (!token) { dispatch(setAuthState({isLoggedIn : true})) }
    else{ callVerifyAuth(token) }

    }, [])

  return { isLoading }

}

export default useAuthVerification;
