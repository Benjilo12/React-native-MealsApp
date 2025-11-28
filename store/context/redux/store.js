import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favourite";

export const store = configureStore({
  reducer: {
    favouriteMeals: favoritesReducer,
  },
});
