import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    isAdmin : false,
    userData : {},
    isLoggedIn : false
}

const authSlice = createSlice({
    name: 'authSlice',
    initialState : initialState,
    reducers: {
        setAuthSliceState(state,{payload}){
            return {...payload}
        }}
})

export const {setAuthSliceState} = authSlice.actions
export default authSlice.reducer
