import { createSlice, configureStore } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",  // Set a valid name
  initialState: { user: "", isLoggedIn: false },
  reducers: {  // Corrected the typo to "reducers"
    login: (state, action) => {
      
      state.isLoggedIn = true;
    },
    logout: (state) => {
     
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,  // Use a meaningful key here to access this part of the state
  },
});
