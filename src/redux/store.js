import { configureStore } from "@reduxjs/toolkit";
import categorySortSliceReducer from "./slice/categorySort_and_PaginationSlice";
import filterSliceReducer from "./slice/filterSlice";

export const store = configureStore({
  reducer: {
    categorySortReducer: categorySortSliceReducer,
    filterReducer: filterSliceReducer,
  },
});
