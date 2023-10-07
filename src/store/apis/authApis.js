import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath:"auth",
    baseQuery: fetchBaseQuery({
        baseUrl : 'https://efce1xom36.execute-api.ap-south-1.amazonaws.com/dev',
    }),
    endpoints(builder){
        return {
            login : builder.mutation({ 
                query: (data) => { 
                  return {
                    url: '/user',
                    method: 'POST',
                    body: data,     
                  };
                },
            }),
            verifyAuth : builder.mutation({ 
                query: (token) => { 
                  return {
                    url: '/user/auth',
                    method: 'POST',
                    headers: {
                        Authorization: token,
                      },   
                  };
                },
            }),
        }
    }
})

export const {useLoginMutation, useVerifyAuthMutation} = authApi