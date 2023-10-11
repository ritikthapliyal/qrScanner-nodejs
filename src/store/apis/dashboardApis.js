import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const dashboardApi = createApi({
    reducerPath:"dashboard",
    baseQuery: fetchBaseQuery({
        baseUrl : 'https://efce1xom36.execute-api.ap-south-1.amazonaws.com/dev',
    }),
    endpoints(builder){
        return {
            addBarcode : builder.mutation({ 
                query: (data) => {
                  return {
                    url: '/dashboard',
                    method: 'POST',
                    headers: {
                        Authorization: localStorage.getItem('token') || "token"},
                    body: { data }   
                  }
                },
            }),
        }
    }
})

export const {useAddBarcodeMutation } = dashboardApi