import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import  api  from '../../api/config'
import axios from "axios";

const initialState = {
  posts: [],
  status: 'idle',
  error: null,
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (query) => {
  // const response = await api.get('/posts/all')
  const {user_id = null} = query;
  console.log("user_id")
  const response = await axios.get("http://localhost:5000/posts/all",{
    params: {
      user_id,
    },
  });
  console.log(response)
  return response.data
})

export const addNewPost = createAsyncThunk(
  'posts/addNewPost',
  async (initialPost, { getState }) => {
    const state = getState(); 
    initialPost.username = state.user.user.username

    console.log(initialPost)
    console.log("sending create post request");
    const response = await axios.post("http://localhost:5000/posts/create",initialPost);
    console.log(response.data)
    return response.data
  }
)

export const addComment = createAsyncThunk(
  'posts/addComment',
  async (initialPost) => {
    console.log(initialPost)
    console.log("sending create post request");
    const response = await axios.put("http://localhost:5000/posts/addComment",initialPost);
    console.log(response.data)
    return response.data
  }
)

export const LikePost = createAsyncThunk("posts/likepost", async ( {postId, username}) => {
           const response = await axios.put(`http://localhost:5000/posts/likepost`, {
              username,
              postId
            }  
           );
           console.log(response.data)
             return response.data;
} )

export const UnLikePost = createAsyncThunk("post/unlikepost", async ( {postId, username }) => {
   try{
       const response = await axios.put(`http://localhost:5000/posts/unlikepost`, {
           postId,
           username
       });
       console.log(response.data)
        return response.data;
   } catch (error) {
       console.log("Error occured: ", error.message);
       return Promise.reject(error.message);
   }
} )


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
        console.log(state.posts)
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
      .addCase(addComment.fulfilled, (state, action) => {
        console.log(action.payload)
        const {_id} = action.payload;
            const post = state.posts.find(
                post => post._id === _id
            );
            post.comments = action.payload.comments.reverse();
      })
      .addCase(LikePost.pending, (state) => {
        // state.actionInProgress = true;
    })
    .addCase(LikePost.fulfilled, (state, action) => {
      const {_id} = action.payload;
      console.log(action.payload._id)
              const existingPost = state.posts.find((post) => post._id === _id);
              console.log(existingPost);
              existingPost.likes = action.payload.likes;
        console.log(action.payload)
        // if(action.payload.success){
            // const post = state.feed.find( 
            //     post => post._id === action.payload.post._id
            //     );
            //     post.likes = action.payload.post.likes;
        // }
    },)
    .addCase(LikePost.rejected, (state, action) => {
        // state.actionInProgress = false;
        // state.isError = true
        state.errorMsg = action.error.message;
    })
    .addCase(UnLikePost.pending, (state) => {
        state.actionInProgress = true;
    })
    .addCase(UnLikePost.fulfilled, (state, action) => {
      const {_id} = action.payload;
      console.log(_id)
      console.log(action.payload)
              const existingPost = state.posts.find((post) => post._id === _id);
              console.log(existingPost);
              console.log(state.posts)
              existingPost.likes = action.payload.likes;
    })
    .addCase(UnLikePost.rejected, (state, action) => {
        // state.actionInProgress = false;
        // state.isError = true;
        // state.errorMsg = action.error.message;
    })
  },
})

export const { postAdded, postUpdated, reactionAdded,createNewPost,resetState} = postsSlice.actions

export default postsSlice.reducer

export const selectAllPosts = (state) => state.posts.posts

export const selectPostById = (state, postId) =>
  state.posts.posts.find((post) => post.id === postId)
