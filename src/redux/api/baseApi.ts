import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

export const baseQuery = fetchBaseQuery({
    baseUrl: 'https://smartphone-frontend.vercel.app/',
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token as string

        if (token) {
            headers.set('authorization', `${token}`)
        }

        return headers
    }
})


export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQuery,
    tagTypes: ['phone', 'sale'],
    endpoints: () => ({

    })
})