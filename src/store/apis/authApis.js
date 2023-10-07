import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath:"auth",
    baseQuery: fetchBaseQuery({
        baseUrl : 'https://efce1xom36.execute-api.ap-south-1.amazonaws.com/dev',
        credentials: 'include',
    }),
    endpoints(builder){
        return {
            login : builder.mutation({ 
                query: (data) => { 
                  return {
                    url: '/login',
                    method: 'POST',
                    body: data,     
                  };
                },
            }),
        }
    }
})


export const {useLoginMutation} = authApi