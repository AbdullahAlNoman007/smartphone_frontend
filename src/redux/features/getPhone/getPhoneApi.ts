import { baseApi } from "../../api/baseApi";

export const getPhoneApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getallphone: builder.query({
            query: () => ({
                url: '/product/get-products',
                method: "GET"
            }),
            providesTags: ['phone']
        }),
        createphone: builder.mutation({
            query: (info) => ({
                url: '/product/create-product',
                method: "POST",
                body: info
            }),
            invalidatesTags: ['phone']
        }),
        deletephone: builder.mutation({
            query: (info) => ({
                url: '/product/delete-products',
                method: 'DELETE',
                body: info
            }),
            invalidatesTags: ['phone']
        })

    })
})

export const { useGetallphoneQuery, useCreatephoneMutation, useDeletephoneMutation } = getPhoneApi