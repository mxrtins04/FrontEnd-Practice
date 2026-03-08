import {creatApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const URL = import.meta.env.VITE_API_URL;
export const productApi = creatApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({baseUrl: URL}),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => "/products"
        })
    })
})

export const {useGetAllProductsQuery} = productApi