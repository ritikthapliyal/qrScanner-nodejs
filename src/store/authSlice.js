import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    isLoggedIn : false,
    barcodes : []
}

const authSlice = createSlice({
    name: 'authSlice',
    initialState : initialState,
    reducers: {
        setAuthState(state,{payload}){
            return {...state,...payload}
        },
        setBarcodes(state,{payload}){
            return {...state,barcodes:payload}
        },
        addLatestBarcode(state,{payload}){
            return{...state,barcodes:[payload,...state.barcodes]}
        }
    }
})

export const {setAuthState,setBarcodes,addLatestBarcode} = authSlice.actions
export default authSlice.reducer
