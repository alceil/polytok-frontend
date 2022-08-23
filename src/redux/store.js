import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers/auth.reducer";

const store = configureStore({ reducer });

export default store;