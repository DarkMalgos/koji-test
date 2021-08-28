import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const jsonplaceholderApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    tagTypes: [],
    endpoints: (builder) => ({
      getAllPosts: builder.query({
        query: () => `posts`,
      }),
      getPostById: builder.query({
          query: (id: number) => `posts/${id}`
      }),
      getAllComments: builder.query({
        query: (id: number) => `posts/${id}/comments`,
      }),
    }),
  })

  export const {
      useGetAllPostsQuery,
      useGetPostByIdQuery,
      useGetAllCommentsQuery
  } = jsonplaceholderApi