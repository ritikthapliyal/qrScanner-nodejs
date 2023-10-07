import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const dashboardApi = createApi({
    reducerPath:"dashboard",
    baseQuery: fetchBaseQuery({
        baseUrl : 'https://efce1xom36.execute-api.ap-south-1.amazonaws.com/dev',
    }),
    endpoints(builder){
        return {
            getBarcode : builder.query({ 
                query: () => { 
                  return {
                    url: '/dashboard',
                    method: 'GET',
                    headers: {
                        Authorization: localStorage.getItem('token') || "token",
                    },  
                  }
                },
            }),
            addBarcode : builder.mutation({ 
                query: () => { 
                  return {
                    url: '/dashboard',
                    method: 'POST',
                    headers: {
                        Authorization: localStorage.getItem('token') || "token",
                      },   
                  }
                },
            }),
        }
    }
})

export const {useAddBarcodeMutation, useGetBarcodeQuery } = dashboardApi