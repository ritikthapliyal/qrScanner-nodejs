import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    isLoggedIn : false,
    barcodes : []
}

const authSlice = createSlice({
    name: 'authSlice',
    initialState : initialState,
    reducers: {setAuthState(state,{payload}){return {...state,...payload}}}
})

export const {setAuthState} = authSlice.actions
export default authSlice.reducer
