import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://bing-news-search1.p.rapidapi.com";
const headers = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
  "x-rapidapi-key": "54c89a8de4mshc1a21d2afbe1b09p127c47jsnf9bf16dea9f5",
};
const getNews = (url) => ({
  url,
  headers,
});
export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNews",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: ({ newsCategory, count }) =>
        getNews(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});
export const { useGetNewsQuery } = cryptoNewsApi;
