import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "./product.type";

export const productApi = createApi({
  reducerPath: "api/products",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (build) => ({
    getProducts: build.query<IProduct[], number>({
      query: (limit: number = 3) => ({
        url: "/products",
        params: { _limit: limit },
      }),
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
