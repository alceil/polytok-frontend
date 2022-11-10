import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import  api  from '../../api/config'
import axios from "axios";

const initialState = {
  posts: [],
  status: 'idle',
  error: null,
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  // const response = await api.get('/posts/all')
  const response = await axios.get("http://localhost:5000/posts/all");
  return response.data
})

export const addNewPost = createAsyncThunk(
  'posts/addNewPost',
  async (initialPost) => {
    console.log("sending create post request");
    const response = await axios.post("http://localhost:5000/posts/create",initialPost);
    console.log(response.data)
    return response.data
  }
)

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {


//     resetState(state){
// state.posts = []
//     },
    createNewPost(state, action){
      state.posts.push(action.payload)
    },
    // reactionAdded(state, action) {
    //   const { postId, reaction } = action.payload
    //   const existingPost = state.posts.find((post) => post.id === postId)
    //   if (existingPost) {
    //     existingPost.reactions[reaction]++
    //   }
    // },
    postUpdated(state, action) {
      const { id, title, content } = action.payload
      const existingPost = state.posts.find((post) => post.id === id)
      if (existingPost) {
        existingPost.title = title
        existingPost.content = content
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // Add any fetched posts to the array
        state.posts = action.payload
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        console.log("post added triggered")
        console.log(action.payload.post.title)
        state.posts=[action.payload.post,...state.posts]
        console.log(state.posts)
      })
  },
})

export const { postAdded, postUpdated, reactionAdded,createNewPost,resetState } = postsSlice.actions

export default postsSlice.reducer

export const selectAllPosts = (state) => state.posts.posts

export const selectPostById = (state, postId) =>
  state.posts.posts.find((post) => post.id === postId)
