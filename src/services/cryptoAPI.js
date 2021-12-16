// var options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/exchanges',
//     headers: {
//       'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//       'x-rapidapi-key': '54c89a8de4mshc1a21d2afbe1b09p127c47jsnf9bf16dea9f5'
//     }
//   };
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = "https://coinranking1.p.rapidapi.com";
const headers = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "54c89a8de4mshc1a21d2afbe1b09p127c47jsnf9bf16dea9f5",
};
const getExchenges = (url) => ({
  url,
  headers,
});
export const cryptoApi = createApi({
  reducerPath: "crypto",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => getExchenges(`/coins?limit=${count}`),
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;
