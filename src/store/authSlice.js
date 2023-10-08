import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    isLoggedIn : false,
    shoudRefresh : false
}

const authSlice = createSlice({
    name: 'authSlice',
    initialState : initialState,
    reducers: {
        setAuthState(state,{payload}){
            return {...payload}
        }},
        refresh(state){
            return {...state,shouldRefresh:!state.shouldRefresh}
        }
    })

export const {setAuthState,refresh} = authSlice.actions
export default authSlice.reducer
