import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    isLoggedIn : false,
    shouldRefresh : false
}

const authSlice = createSlice({
    name: 'authSlice',
    initialState : initialState,
    reducers: {
        setAuthState(state,{payload}){
            return {...payload}
        }
    }
})

export const {setAuthState} = authSlice.actions
export default authSlice.reducer
