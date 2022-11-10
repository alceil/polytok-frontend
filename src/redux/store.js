import {configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/users.slice";
import postReducer from "./slices/posts.slice";
import thunk from "redux-thunk";
const store = configureStore({ reducer:{
    post: postReducer,
    user:userReducer
},
middleware: (getDefaultMiddleware) =>
getDefaultMiddleware({
  serializableCheck: false,
}),
thunk
}

);

export default store;