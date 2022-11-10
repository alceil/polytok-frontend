import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { customToast } from "../../features";

export const signupService = createAsyncThunk(
  "user/signup",
  async (initialData) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/auth/register",initialData);
        console.log(initialData)
        console.log(response)
      if (response.data.success) {
        // localStorage.setItem(
        //   "login",
        //   JSON.stringify({
        //     token: response.data.user.token,
        //     isUserLoggedIn: true
        //   })
        // );
        console.log(response.data)
        console.log("user signed up");
        // customToast("User SignUp Successful!");
      }
      return response.data;
    } catch (error) {
      console.log("Error occured: ", error.message);
      return Promise.reject(error.message);
    }
  }
);

export const loginService = createAsyncThunk(
  "user/login",
  async (initialData) => {
    console.log("btn clicked");
    try {
      localStorage?.clear();
      console.log("making the login network call");
      const response = await axios.post(
        "http://localhost:5000/auth/login",
        initialData
      );
      // if (response.data.success) {
      //   console.log(response.data)
      //   console.log("user logged in");
      // }
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.log("Error occured: ", error.message);
      return Promise.reject(error.message);
    }
  }
);


export const updateProfilePicService = createAsyncThunk(
  "user/updateProfilePic",
  async (initialData) => {
    console.log("btn clicked");
    try {
      const response = await axios.put(
        "http://localhost:5000/auth/updateProfilePic",
        initialData
      );
      if (response.data.success) {
        console.log(response.data)
      }
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.log("Error occured: ", error.message);
      return Promise.reject(error.message);
    }
  }
);

export const updateUserDetails = createAsyncThunk(
  "user/updateUserDetails",
  async (initialData) => {
    console.log(initialData)
    console.log("btn clicked");
    try {
      const response = await axios.put(
        "http://localhost:5000/auth/updateUserDetails",
        initialData
      );
      if (response.data.success) {
        console.log(response.data)
      }
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.log("Error occured: ", error.message);
      return Promise.reject(error.message);
    }
  }
);

// export const getProfileService = createAsyncThunk("user/myProfile", async () => {
//   const { token } = JSON.parse(localStorage?.getItem("login"));
//   try{
//     const response = await axios.get("https://fitgramapi.pranjalmahajan.repl.co/posts/getuserposts",{
//       headers: { authorization: token }
//     });
//     if(response.data.success){
//       console.log("got profile");
//       return response.data;
//     }else {
//       console.log("error fetching profile");
//       return response.data;
//     }
//   }catch (error){
//     console.log("Error occures while fetching the profile ", error.message);
//     return Promise.reject(error.message);
//   }
// })

// export const getUserProfileService = createAsyncThunk("user/userProfile", async ( id ) => {
//   const { token } = JSON.parse(localStorage?.getItem("login"));
//   try{
//     const response = await axios.get(`https://fitgramapi.pranjalmahajan.repl.co/user/${id}`,{
//       headers: { authorization: token }
//     });
//     // console.log("got user's profile");
//     // console.log(response.data)
//     return response.data;
//   }catch (error){
//     console.log("Error occures while fetching the profile ", error.message);
//     return Promise.reject(error.message);
//   }
// })

// export const followBtnClicked = createAsyncThunk("user/followUser", async (followUserId) => {
//   const { token } = JSON.parse(localStorage?.getItem("login"));
//   try{
//     console.log("sending follow req....")
//     const response = await axios.put("https://fitgramapi.pranjalmahajan.repl.co/user/followUser", {
//       followUserId
//     }, {
//       headers: { authorization: token }
//     })
//     console.log("successful")
//     return response.data;
//   }catch (error){
//     console.log("Unable to follow user ", error.message);
//     return Promise.reject(error.message);
//   }
// })

// export const unfollowBtnClicked = createAsyncThunk("user/unfollowUser", async (unfollowUserId) => {
//   const { token } = JSON.parse(localStorage?.getItem("login"));
//   try{
//     const response = await axios.put("https://fitgramapi.pranjalmahajan.repl.co/user/unfollowUser", {
//       unfollowUserId
//     }, {
//       headers: { authorization: token }
//     })
//     return response.data;
//   }catch (error){
//     console.log("Unable to unfollow user ", error.message);
//     return Promise.reject(error.message);
//   }
// })



const initialState = {
  loginStatus: false,
  isUserLoggedIn: false,
  isEditModalVisible: false,
  isLoginModalVisible: false,
  isSignUpModalVisible: false,
  user: {
    _id:null,
    name: null,
    firstname: null,
    lastname:null,
    username: null,
    email: null,
    bio: "",
    followers: [],
    following: [],
    posts: [],
    profilePic:''
  },
  userLoading: "not-loading" ,
  isError: false,
  errorMsg: "",
  profileLoading: false,
  actionInProgress: false,
  userProfile: {
    user:{},
    posts:[]
  }
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginmodalopen: (state) => {
      state.isLoginModalVisible= true;
    },



    loginmodalclose: (state) => {
      state.isLoginModalVisible= false;
    },
    signupmodalopen: (state) => {
      state.isSignUpModalVisible= true;
    },
    signupmodalclose: (state) => {
      state.isSignUpModalVisible= false;
    },
    signup: (state,action) => {
      state.isSignUpModalVisible= false;
      console.log(action)
      state.user.firstname=action.payload.firstname;
      state.isUserLoggedIn= true
      console.log(state.user.firstname)
    },

    editprofilemodalopen: (state) => {
      state.isEditModalVisible=true;
    },
    
    editprofilemodalclose: (state) => {
      state.isEditModalVisible=false;
    },

    changeProfilePic:(state,action) => {
      state.user.profilePic = action.payload;
      console.log(action.payload)
    },
    updatedetails: (state,action) => {
      state.user.firstname = action.payload.firstname;
      state.user.lastname = action.payload.lastname;
      state.user.bio = action.payload.bio;
    },
    logoutBtnPressed: (state, action) => {
      localStorage.removeItem("login");
      state.user = {
        _id:null,
        name: null,
        username: null,
        email: null,
        bio: "",
        followers: [],
        following: [],
        posts: [],
        profilePic: ""
      };
      state.loginStatus = false;
      state.isError = false;
      state.errorMessage = "";
      state.userLoading = "not-loading" ;
      state.profileLoading = false;
      state.actionInProgress = false;
      state.userProfile = {
        user:{},
        posts:[]
      }
    }
  },
  extraReducers: {
    [updateProfilePicService.pending]: (state, action) => {
      state.userLoading = "loading";
    },
    [updateProfilePicService.fulfilled]: (state, action) => {
      console.log(action.payload.message.profilePic)
        state.user.profilePic = action.payload.message.profilePic;
        // state.isError = false;
        // state.errorMessage = "";
    },
    [updateProfilePicService.rejected]: (state, action) => {
      state.userLoading = "error";
      state.isError = true;
      state.errorMsg = action.error.message;
    },
    
    
    [signupService.pending]: (state, action) => {
      state.userLoading = "loading";
    },
    [signupService.fulfilled]: (state, action) => {
      state.userLoading = "fulfilled";
      console.log(action.payload)
        state.isUserLoggedIn = true;
        state.user = action.payload.user;
        state.isError = false;
        state.errorMessage = "";
    },
    [signupService.rejected]: (state, action) => {
      state.userLoading = "error";
      state.isError = true;
      state.errorMsg = action.error.message;
    },


    [loginService.pending]: (state, action) => {
      state.userLoading = "loading";
    },
    [loginService.fulfilled]: (state, action) => {
      state.userLoading = "fulfilled";
      console.log("##action")
      console.log(action.payload.user)
        state.isUserLoggedIn = true;
        state.user = action.payload.user;
        // state.isError = false;
        // state.errorMessage = "";
       
    },
    [loginService.rejected]: (state, action) => {
      state.userLoading = "error";
      state.isError = true;
      state.errorMsg = action.error.message;
    },


    [updateUserDetails.pending]: (state, action) => {
      state.userLoading = "loading";
    },
    [updateUserDetails.fulfilled]: (state, action) => {
      console.log(action.payload)
        state.user = action.payload.message;
        // state.isError = false;
        // state.errorMessage = "";
    },
    [updateUserDetails.rejected]: (state, action) => {
      state.userLoading = "error";
      state.isError = true;
      state.errorMsg = action.error.message;
    },
    // [getProfileService.pending]: (state) => {
    //   state.profileLoading = true;
    // },
    // [getProfileService.fulfilled]: (state, action) => {
    //   state.profileLoading = false; 
    //   state.user.posts = action.payload.posts;
    // },
    // [getProfileService.rejected]: (state, action) => {
    //   state.profileLoading = false; 
    //   state.isError = true;
    //   state.errorMsg = action.error.message;
    // },

    // [getUserProfileService.pending]: (state) => {
    //   state.profileLoading = true;
    // },
    // [getUserProfileService.fulfilled]: (state, action) => {
    //   state.profileLoading = false; 
    //   state.userProfile.user = action.payload.user;
    //   state.userProfile.posts = action.payload.posts;
    // },
    // [getUserProfileService.rejected]: (state, action) => {
    //   state.profileLoading = false; 
    //   state.isError = true;
    //   state.errorMsg = action.error.message;
    // },

    // [followBtnClicked.pending]: (state) => {
    //   state.actionInProgress = true;
    // },
    // [followBtnClicked.fulfilled]: (state, action) => {
    //   state.actionInProgress = false;
    //   state.user = action.payload.user;
    //   state.userProfile.user = action.payload.followUser;
    // },
    // [followBtnClicked.rejected]: (state, action) => {
    //   state.actionInProgress = false; 
    //   state.isError = true;
    //   state.errorMsg = action.error.message;
    // },

    // [unfollowBtnClicked.pending]: (state) => {
    //   state.actionInProgress = true;
    // },
    // [unfollowBtnClicked.fulfilled]: (state, action) => {
    //   state.actionInProgress = false;
    //   state.user = action.payload.user;
    //   state.userProfile.user = action.payload.unfollowUser;
    // },
    // [unfollowBtnClicked.rejected]: (state, action) => {
    //   state.actionInProgress = false; 
    //   state.isError = true;
    //   state.errorMsg = action.error.message;
    // },

   
  }
});

export const { logoutBtnPressed, loginmodalopen,loginmodalclose,signupmodalopen,signupmodalclose,signup,updatedetails,changeProfilePic} = userSlice.actions;

export default userSlice.reducer;
