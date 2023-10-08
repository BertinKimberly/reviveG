import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
   //add reducers
});

//initial state

const initialState = {};

export const store = configureStore({
   reducer: rootReducer,
   preloadedState: initialState,
});
